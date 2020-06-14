package br.com.b3.cadastro.service;

import br.com.b3.cadastro.model.Usuario;
import br.com.b3.cadastro.repository.UsuarioRepository;
import br.com.b3.cadastro.validations.UsuarioValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Serviço de usuário.
 * Contém as regras de negócio para CRUD de usuário
 *
 * @author brunocarneiro
 */
@Service
public class UsuarioService {

    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioValidation usuarioValidation;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    /**
     * Busca todos os usuários cadastrados
     *
     * @return
     *      Lista contendo todos os usuários cadastrados
     * @throws Exception
     */
    public List<Usuario> findAll() throws Exception {
        try {
            return this.usuarioRepository.findAll();
        }
        catch (Exception e) {
            throw new Exception(e);
        }
    }

    /**
     * Realiza a persistência de um usuário
     *
     * @param usuario
     *      Usuário a ser persistido
     * @return
     *      Usuário persistido
     */
    public Usuario save(Usuario usuario) throws Exception {
        try {
            if (!usuarioValidation.validate(usuario)) {
                throw new Exception("Erro de validação de usuário");
            }
            return this.usuarioRepository.save(usuario);
        }
        catch (Exception e) {
            throw new Exception(e);
        }
    }

    /**
     * Busca um usuário pelo userId
     *
     * @param id
     *      Id do usuário a ser consultado
     * @return
     *      Usuário consultado
     * @throws Exception
     */
    public Usuario findById(Integer id) throws Exception {
        try {
            return this.usuarioRepository.findById(id).get();
        }
        catch(Exception e) {
            throw new Exception(e);
        }
    }

    /**
     * Busca usuários pelo email
     *
     * @param email
     *      Email do usuário a ser consultado
     * @return
     *      Usuários consultados
     * @throws Exception
     */
    public List<Usuario> findByEmail(String email) throws Exception {
        try {
            return this.usuarioRepository.findByEmail(email);
        }
        catch(Exception e) {
            throw new Exception(e);
        }
    }

    /**
     * Busca usuários pelo companyId
     *
     * @param companyId
     *      companyId a qual os usuários pertencem
     * @return
     *      Usuários que pertencem aquela companyId
     */
    public List<Usuario> findByCompanyId(Integer companyId) throws Exception {
        try {
            return this.usuarioRepository.findByCompanyId(companyId);
        }
        catch(Exception e) {
            throw new Exception(e);
        }
    }

    /**
     * Delete um usuário pelo Id
     *
     * @param userId
     * @return
     * @throws Exception
     */
    public Usuario deleteByUserId(Integer userId) throws Exception {
        try {
            Usuario usuario = this.usuarioRepository.findById(userId).get();
            if (usuario == null) {
                throw new Exception("Usuário com id " + userId + " não existe");
            }
            this.usuarioRepository.delete(usuario);
            return usuario;
        }
        catch(Exception e) {
            throw new Exception(e);
        }
    }
}
