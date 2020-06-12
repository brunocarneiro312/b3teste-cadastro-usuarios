package br.com.b3.cadastro.dto;

import java.time.LocalDate;

/**
 * DTO para enviar dados de um usuário em uma chamada REST
 *
 * obs: Entendo que, pela baixa complexidade do sistema em questão, não seria necessária
 * a implementação de um DTO de envio e recebimento. Porém julguei necessário tal implementação
 * para demonstrar o conhecimento de que o padrão DTO é aconselhável para realizar o tráfego de dados
 * entre a camada de frontend e backend.
 *
 * @author brunocarneiro
 */
public class UsuarioDTORequest {

    private Integer companyId;

    private String email;

    private LocalDate birthdate;

    public UsuarioDTORequest(Integer companyId, String email, LocalDate birthdate) {
        this.companyId = companyId;
        this.email = email;
        this.birthdate = birthdate;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }
}
