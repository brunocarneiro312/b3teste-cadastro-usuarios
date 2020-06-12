package br.com.b3.cadastro.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * Entidade que representa um usuário
 *
 * @author brunocarneiro
 */
@Entity
@Table(name = "usuarios")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Integer userId;

    @Column(name = "companyId")
    private Integer companyId;

    @Column(name = "email")
    private String email;

    @Column(name = "birthdate")
    private LocalDate birthdate;

    public Usuario() {

    }

    public Usuario(Integer companyId, String email, LocalDate birthdate) {
        this.companyId = companyId;
        this.email = email;
        this.birthdate = birthdate;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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

    @Override
    public String toString() {
        return "Usuario{" +
                "userId=" + userId +
                ", companyId=" + companyId +
                ", email='" + email + '\'' +
                ", birthdate=" + birthdate +
                '}';
    }
}
