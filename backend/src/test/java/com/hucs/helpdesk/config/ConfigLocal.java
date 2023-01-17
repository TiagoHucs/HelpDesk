package com.hucs.helpdesk.config;

import com.hucs.helpdesk.negocio.usuario.EProfile;
import com.hucs.helpdesk.negocio.usuario.IUsuarioRepository;
import com.hucs.helpdesk.negocio.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.logging.Level;
import java.util.logging.Logger;

@Component
public class ConfigLocal implements CommandLineRunner {
    Logger logger = Logger.getLogger(this.getClass().getName());

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        //ainda é preciso setar spring.profiles.active=dev nas variaveis de ambiente para pegar o .propertie correto
        logger.log(Level.INFO, "Iniciando geração de massas de dados");
        criaUsuarios();
        logger.log(Level.INFO, "Finalizando geração de massas de dados");

    }

    private void criaUsuarios(){
        logger.log(Level.INFO, "Criando usuarios");
        if(usuarioRepository.findByEmail("usuario@gmail.com") == null){
            Usuario usuario = new Usuario();
            usuario.setEmail("usuario@gmail.com");
            usuario.setPassword(passwordEncoder.encode("123456"));
            usuario.setProfile(EProfile.USUARIO);
            usuarioRepository.save(usuario);
        }
        if(usuarioRepository.findByEmail("tecnico@gmail.com") == null){
            Usuario usuario = new Usuario();
            usuario.setEmail("tecnico@gmail.com");
            usuario.setPassword(passwordEncoder.encode("123456"));
            usuario.setProfile(EProfile.TECNICO);
            usuarioRepository.save(usuario);
        }

        if(usuarioRepository.findByEmail("gestor@gmail.com") == null) {
            Usuario usuario = new Usuario();
            usuario.setEmail("gestor@gmail.com");
            usuario.setPassword(passwordEncoder.encode("123456"));
            usuario.setProfile(EProfile.GESTOR);
            usuarioRepository.save(usuario);
        }
    }
}
