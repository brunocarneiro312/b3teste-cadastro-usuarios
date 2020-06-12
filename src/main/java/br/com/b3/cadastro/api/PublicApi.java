package br.com.b3.cadastro.api;

import br.com.b3.cadastro.model.Usuario;
import br.com.b3.cadastro.service.FileService;
import br.com.b3.cadastro.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
public class PublicApi {

    @Autowired
    private FileService fileService;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/file")
    public ResponseEntity<String> readFile() {
        try {
            fileService.readFile();
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/save")
    public ResponseEntity<Usuario> save() {
        try {
            Usuario usuario = new Usuario(1, "teste@teste.com", LocalDate.now());
            this.usuarioService.save(usuario);
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
        catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
