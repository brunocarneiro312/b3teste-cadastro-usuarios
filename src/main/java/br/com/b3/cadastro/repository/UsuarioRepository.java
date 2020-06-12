package br.com.b3.cadastro.repository;

import br.com.b3.cadastro.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Lida de forma transparente com as ações de BD para a entidade Usuário
 *
 * @author brunocarneiro
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    /**
     * Busca usuários pelo email
     *
     * @param email
     *      Email do usuário a ser consultado
     * @return
     *      Usuários consultados
     */
    List<Usuario> findByEmail(String email);

    /**
     * Busca usuários pelo companyId
     *
     * @param companyId
     *      companyId a qual os usuários pertencem
     * @return
     *      Usuários que pertencem aquela companyId
     */
    List<Usuario> findByCompanyId(Integer companyId);
}
