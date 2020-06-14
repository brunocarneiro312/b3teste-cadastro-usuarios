# B3 Teste - Cadastro de Usuários
Projeto para participação de processo seletivo.  
**Atenção: O código fonte do frontend pode ser visto no repositório [b3teste-cadastro-usuarios-frontend](https://github.com/brunocarneiro312/b3teste-cadastro-usuarios-frontend)**

![alt imagem](https://i.ibb.co/s6QMqBs/ss1.png)

### Backend
- Java 8
- Spring Boot
- H2 Database
- Apache Maven

### Frontend
- Angular 9
- RxJs
- Sass

## Instalação

- Clone este projeto para um diretório em sua máquina local
- Navegue até a pasta onde o projeto está
- Execute o comando 

```bash
mvn clean package
```
**atenção: O maven deve ser instalado na máquina antes de rodar o comando**  
Link para o maven: [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

## Utilização

- Crie a pasta **app/files/** no diretório home do usuário. **Ex: /home/bruno/app/files/**
  - home/username (linux)
  - C:/Users/username (windows)
- Abra o prompt de comando e navegue até a pasta onde consta o projeto
- Utilize o comando para rodar a aplicação

```
java -Xms512m -Xmx512m -jar app.jar
```
- Dentro da pasta /app/files adicione arquivos .csv de acordo com o template de exemplo

```
companyId;email;birthdate
3;johndoe@acme.com;25/01/1980
2;kiko.silva@xpto.com;31/01/2000
5;bruce@lee.com;27/11/1940
10;sue@ownen.com;03/06/1985
7;johndoe@acme.com;25/01/1980
1;janesmith@acme.com;28/02/1989
```
- Após 30 segundos o programa processará todos os arquivos .csv com o template descrito acima, cadastrando-os na base de dados e adicionando o timestamp no sufixo dos arquivos processados.

- Com o programa rodando, abra o navegador é acesse a url para acessar a interface
```
http://localhost:8080/
```

- Note que a documentação da API consta no swagger através do endereço
```
http://localhost:8080/swagger-ui-custom.html
```

- Para acessar o banco de dados em memória (H2), basta acessar o endereço

```
http://localhost:8080/h2-console
```

Credenciais de acesso ao H2
```
Driver Class: org.h2.Driver
JDBC URL: jdbc:h2:mem:testdb
User Name: sa
Password: <vazio>
```

![alt h2](https://i.ibb.co/nDYWkF5/s2.png)
