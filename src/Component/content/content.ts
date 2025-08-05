import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {NgOptimizedImage} from '@angular/common';
import {MatSlider, MatSliderRangeThumb} from '@angular/material/slider';

@Component({
  selector: 'app-content',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    NgOptimizedImage,
    MatSlider,
    MatSliderRangeThumb
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {

}
