import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from '../Component/header/header';
import {Nav} from '../Component/nav/nav';
import {BreadCrumb} from '../Component/bread-crumb/bread-crumb';
import {Content} from '../Component/content/content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, BreadCrumb, Content],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mcbook');
}
