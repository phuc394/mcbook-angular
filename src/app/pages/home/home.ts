import { Component } from '@angular/core';
import {BreadCrumb} from "../../../Component/bread-crumb/bread-crumb";
import {Content} from "../../../Component/content/content";
import {Footer} from "../../../Component/footer/footer";
import {Header} from "../../../Component/header/header";
import {Nav} from "../../../Component/nav/nav";


@Component({
  selector: 'app-home',
    imports: [
        BreadCrumb,
        Content,
        Footer,
        Header,
        Nav
    ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
