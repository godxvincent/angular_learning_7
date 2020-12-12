import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: [
  ]
})
export class ProtectedComponent implements OnInit {

  objeto : any;
  constructor(public auth:AuthService ) {
    this.auth.user$.subscribe( data => {
      this.objeto = data;
    })
   }

  ngOnInit(): void {
  }

}
