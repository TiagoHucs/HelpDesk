package com.hucs.helpdesk.negocio.navbar;

import com.hucs.helpdesk.negocio.usuario.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NavbarService {

    @Autowired
    private UsuarioService usuarioService;

    public NavbarResource getNavbarResource(){

        NavbarResource resource = new NavbarResource();

        NavbarMenuVO menuComum = getMenuComum();
        NavbarMenuVO menuLinks = getMenuLinks();

        if(menuComum.getItems().size() > 0)
            resource.getMenu().add(menuComum);
        if(menuLinks.getItems().size() > 0)
            resource.getMenu().add(menuLinks);

        return resource;

    }

    private NavbarMenuVO getMenuComum(){

        List<NavbarMenuItemVO> items = new ArrayList<>();

        if (true)
            items.add(new NavbarMenuItemVO("fa fa-plus", "Criar", "/app/chamados/criar", null));
        if (true)
            items.add(new NavbarMenuItemVO("fa fa-list", "Listar", "/app/chamados/listar", null));

        return NavbarMenuVO.builder()
                .icone("fa fa-ticket")
                .titulo("Chamados")
                .items(items)
                .build();

    }

    private NavbarMenuVO getMenuLinks(){

        List<NavbarMenuItemVO> items = new ArrayList<>();
        items.add(new NavbarMenuItemVO("fa fa-ticket","Inscrições","#","_blank"));
        items.add(new NavbarMenuItemVO("fa fa-instagram","Instagram","#","_blank"));
        items.add(new NavbarMenuItemVO("fa fa-youtube","YouTube","#","_blank"));

        return NavbarMenuVO.builder()
                .icone("fa fa-link")
                .titulo("Links")
                .items(items)
                .build();

    }

}
