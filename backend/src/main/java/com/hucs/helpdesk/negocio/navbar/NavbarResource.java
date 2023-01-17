package com.hucs.helpdesk.negocio.navbar;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NavbarResource {

    List<NavbarMenuVO> menu = new ArrayList<>();
    NavbarMenuVO menuPessoal;

}
