package br.com.b3.cadastro.validations;

import br.com.b3.cadastro.model.Usuario;
import org.springframework.stereotype.Component;

import java.util.function.Predicate;
import java.util.regex.Pattern;

/**
 * Componente de validação de usuário
 */
@Component
public class UsuarioValidation {

    // Regex para verificar se a data está formatada corretamente
    private static Pattern DATE_PATTERN = Pattern.compile(
            "^\\d{4}-\\d{2}-\\d{2}$");

    public boolean validate(Usuario usuario) {

        // Predicado para verificar se o companyId é válido
        Predicate<Integer> companyIdNotValid = companyId ->
                companyId != 1
                && companyId != 2
                && companyId != 5
                && companyId != 7
                && companyId != 10;

        // Predicado para verificar se o email e maior que 255 caracteres
        Predicate<String> emailGreaterThan255 = email -> email.length() > 255;

        // Predicado para verificar se a data está em um formato incorreto
        Predicate<String> birthDateInvalidFormat = birthdate -> !DATE_PATTERN.matcher(birthdate).matches();

        try {
            if (companyIdNotValid.test(usuario.getCompanyId())) {
                throw new Exception("companyId inválido!");
            }
            if (emailGreaterThan255.test(usuario.getEmail())) {
                throw new Exception("email maior que 255 caracteres");
            }
            if (birthDateInvalidFormat.test(usuario.getBirthdate().toString())) {
                throw new Exception("birthdate não está no formato correto (dd/mm/yyyy)");
            }

            return true;
        }
        catch (Exception e) {
            e.getMessage();
            return false;
        }
    }
}
