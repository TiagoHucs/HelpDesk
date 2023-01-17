package com.hucs.helpdesk.negocio.navbar;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class NavbarMenuVO {

    private String icone;
    private String titulo;
    private List<NavbarMenuItemVO> items;
}
