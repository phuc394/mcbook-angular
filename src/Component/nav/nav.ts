import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [
    MatTabGroup,
    MatTab,
    NgOptimizedImage
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

}
