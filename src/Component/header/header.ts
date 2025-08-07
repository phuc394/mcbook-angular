import {Component,Input, inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private router: Router) {
  }
  navigateToCart() {
    this.router.navigate(['/cart']).then();
  }
}
