package br.com.b3.cadastro.api;

import br.com.b3.cadastro.dto.UsuarioDTORequest;
import br.com.b3.cadastro.model.Usuario;
import br.com.b3.cadastro.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller para requisições REST referentes ao Usuário
 *
 * @author brunocarneiro
 */
@RestController
@RequestMapping(value = "/usuario")
public class UsuarioApi {

    private UsuarioService usuarioService;

    @Autowired
    public UsuarioApi(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    /**
     * --------
     * findById
     * --------
     */
    @GetMapping("/{userId}")
    public ResponseEntity<Usuario> findByUserId(@PathVariable("userId") Integer userId) {
        try {
            return new ResponseEntity<>(this.usuarioService.findById(userId), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * ---------------
     * findByCompanyId
     * ---------------
     */
    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<Usuario>> findByCompanyId(@PathVariable("companyId") Integer companyId) {
        try {
            return new ResponseEntity<>(this.usuarioService.findByCompanyId(companyId), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * -----------
     * findByEmail
     * -----------
     */
    @GetMapping("/email")
    public ResponseEntity<List<Usuario>> findByCompanyId(@RequestParam String email) {
        try {
            return new ResponseEntity<>(this.usuarioService.findByEmail(email), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * ----
     * save
     * ----
     */
    @PostMapping
    public ResponseEntity<Usuario> save(@RequestBody UsuarioDTORequest dtoRequest) {
        try {
            Usuario usuario = new Usuario(
                    dtoRequest.getCompanyId(),
                    dtoRequest.getEmail(),
                    dtoRequest.getBirthdate());
            usuario = this.usuarioService.save(usuario);
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * ------
     * delete
     * ------
     */
    @DeleteMapping(value = "/{userId}")
    public ResponseEntity<Usuario> delete(@PathVariable Integer userId) {
        try {
            return new ResponseEntity<>(this.usuarioService.deleteByUserId(userId), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
