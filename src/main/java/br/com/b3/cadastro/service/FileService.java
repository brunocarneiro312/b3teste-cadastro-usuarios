package br.com.b3.cadastro.service;

import br.com.b3.cadastro.model.Usuario;
import br.com.b3.cadastro.validations.UsuarioValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import javax.swing.filechooser.FileSystemView;
import java.io.BufferedReader;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Serviço para manipulação de arquivos
 *
 * @author brunocarneiro
 */
@Service
public class FileService {

    private static final String FILE_FOLDER = FileSystemView.getFileSystemView().getHomeDirectory() + "/app/files";

    @Autowired
    private ResourceLoader resourceLoader;

    @Autowired
    private UsuarioValidation usuarioValidation;

    @Autowired
    private UsuarioService usuarioService;

    /**
     * Realiza a leitura do arquivo de usuários
     */
    public void readFile() throws Exception {

        File appFolder = new File(FILE_FOLDER);

        // Utilizando "try with resources" para tentar ler o conteúdo da pasta
        try (Stream<Path> walk = Files.walk(Paths.get(appFolder.toURI()))) {

            // Armazenando os nomes dos arquivos contidos na pasta.
            List<String> nomeDosArquivos = walk.filter(Files::isRegularFile)
                    .map(file -> file.toString()).collect(Collectors.toList());

            // Obtém apenas os nomes de arquivos .csv
            List<String> arquivosCsv = nomeDosArquivos.stream()
                    .filter(file -> file.endsWith(".csv"))
                    .collect(Collectors.toList());

            // Cria lista para processamento dos arquivos .csv
            List<File> listaDeProcessamento = arquivosCsv.stream()
                    .map(csv -> new File(csv))
                    .collect(Collectors.toList());

            // Set de usuários processados
            List<Usuario> usuarios = new ArrayList<>();

            // Processa arquivos .csv
            listaDeProcessamento.forEach(csv -> {
                try {
                    usuarios.addAll(processFile(csv));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        }
        catch (Exception e) {
            e.printStackTrace();
            throw new Exception("Erro ao ler arquivos", e);
        }
    }

    /**
     * Realiza o processamento de um arquivo .csv, devolvendo uma lista
     * de Usuarios.
     *
     * @param csv
     *      Arquivo a ser processado
     * @return
     *      lista de usuários
     * @throws Exception
     *      Exceção genérica a ser lançada para o método chamador em caso de erro
     */
    public List<Usuario> processFile(File csv) throws Exception {

        System.out.println("Processando arquivo: " + csv.getName() + " [" + LocalDateTime.now() + "]");

        List<Usuario> usuariosProcessados = new ArrayList<>();

        try (BufferedReader br = Files.newBufferedReader(Paths.get(csv.getAbsolutePath()))) {

            // Ignorando a primeira linha por se tratar de cabeçalho
            String linha = br.readLine();

            // Formatador de data de nascimento
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

            // Lendo arquivo
            while ((linha = br.readLine()) != null) {

                // Utilizando ";" como critério de separação
                String [] dados = linha.split(";");

                // Criando novo usuário
                Usuario usuario = new Usuario();
                usuario.setCompanyId(Integer.parseInt(dados[0]));
                usuario.setEmail(dados[1]);
                usuario.setBirthdate(LocalDate.parse(dados[2], formatter));

                if (!usuarioValidation.validate(usuario)) {
                    System.out.println("Erro ao processar usuário " + usuario.toString());
                    continue;
                }

                // Adicionando na lista de usuários processados
                usuariosProcessados.add(usuario);

            }

            // Cadastra usuários processados no banco
            for (Usuario usuario : usuariosProcessados) {
                Usuario u = new Usuario(
                        usuario.getCompanyId(),
                        usuario.getEmail(),
                        usuario.getBirthdate());
                this.usuarioService.save(u);
            }

            // Marca o arquivo como processado alterando o seu sufixo para data e hora de processamento.
            String processDateTime = csv.getAbsolutePath() + LocalDateTime.now().toString();
            File newFile = new File(processDateTime);
            csv.renameTo(newFile);

            return usuariosProcessados;
        }
        catch (Exception e) {
            System.out.println("Não foi possível processar o arquivo " + csv.getName());
            throw new Exception(e);
        }
    }
}
