package com.hucs.helpdesk;

import com.hucs.helpdesk.config.ConfigLocal;
import org.springframework.beans.factory.annotation.Autowired;

public class AplicacaoLocal extends HelpdeskApplication {

    @Autowired
    private ConfigLocal configLocal;

}