import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../security/auth.service';
import { UserService } from '../../security/usuario.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  recurso;
  username: string;

  constructor(private authService: AuthService,
              private router: Router,
              private cookieService: CookieService,
              public userService: UserService,
              private service: NavbarService){
  }

  ngOnInit(){
    const token = this.cookieService.get('token');
    const tokenPayload = decode(token);
    console.log(tokenPayload)
    this.username = tokenPayload.sub;
    this.getResource();
    console.log(this.recurso);
  }

  getResource(){
    this.service.recurso().subscribe( response => {
      this.recurso = response;
    })
  }


  signOut() : void {
    this.cookieService.delete('token');
    window.location.href = '/login';
    window.location.reload();
  }

}
