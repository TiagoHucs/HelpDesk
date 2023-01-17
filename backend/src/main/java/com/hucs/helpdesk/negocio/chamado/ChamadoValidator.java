package com.hucs.helpdesk.negocio.chamado;

import com.hucs.helpdesk.config.error.NegocioException;
import org.springframework.stereotype.Component;

@Component
public class ChamadoValidator {

    public static final String REGRA_TAMANHO_TITULO = "O título deve possuir pelo menos 10 caracteres";

    public void criar(ChamadoVO chamadoVO) throws NegocioException {
        if(chamadoVO.getTitulo().getBytes().length < 10){
            throw new NegocioException(REGRA_TAMANHO_TITULO);
        }
    }

}

