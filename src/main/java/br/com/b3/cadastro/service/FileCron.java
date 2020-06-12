package br.com.b3.cadastro.service;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * Serviço que verifica de 30 em 30 segundos os arquivos de usuários para
 * cadastrá-los na base
 *
 * @author brunocarneiro
 */
@Service
@EnableScheduling
public class FileCron {

//    @Scheduled(cron = "0/30 * * * * *")
    public void testCron() {
        System.out.println("Cron");
    }
}
