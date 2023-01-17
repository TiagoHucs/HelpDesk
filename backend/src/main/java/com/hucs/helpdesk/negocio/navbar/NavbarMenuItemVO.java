package com.hucs.helpdesk.negocio.navbar;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class NavbarMenuItemVO {

    private String icone;
    private String titulo;
    private String url;
    private String target;

}
