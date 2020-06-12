package br.com.b3.cadastro.api;

import br.com.b3.cadastro.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicApi {

    @Autowired
    private FileService fileService;

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
}
