package com.hucs.helpdesk.negocio.navbar;

import com.hucs.helpdesk.negocio.chamado.ChamadoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/navbar")
public class NavBarController {

    @Autowired
    private NavbarService service;

    @GetMapping()
    public ResponseEntity<NavbarResource> recurso() {
        return ResponseEntity.ok().body(service.getNavbarResource());
    }
}
