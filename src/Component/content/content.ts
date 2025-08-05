import {Component, EventEmitter, Output} from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {NgOptimizedImage} from '@angular/common';
import {MatSlider, MatSliderRangeThumb} from '@angular/material/slider';
import {Card} from '../card/card';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-content',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    NgOptimizedImage,
    MatSlider,
    MatSliderRangeThumb,
    Card
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {
  @Output() cardEvent= new EventEmitter<ItemModel>()

  booklist: ItemModel[] = [
    {
      id: 1,
      title: 'Comprehensive Grammar For IELTS',
      image: 'https://mcbooks.vn/wp-content/uploads/2025/02/Bia-3D-Comprehensive-Grammar-For-IELTS-Ngu-phap-toan-dien-luyen-thi-IELTS.jpg',
      price: '180.000đ'
    },
    {
      id: 2,
      title: 'Mastering English Vocabulary',
      image: 'https://mcbooks.vn/wp-content/uploads/2024/11/Bia-3D-Mastering-English-Conversation-180-Ngay-Lam-Chu-Tu-Vung-Tieng-Anh.jpg',
      price: '172.000đ'
    },
    {
      id: 3,
      title: 'Destination B2',
      image: 'https://mcbooks.vn/wp-content/uploads/2024/10/Bia-3D-Destination-B2-Dap-an-tren-app-Khong-co-dap-an.jpg',
      price: '186.000đ'
    },
    {
      id: 4,
      title: 'Destination C1&C2',
      image: 'https://mcbooks.vn/wp-content/uploads/2024/10/Bia-3D-Destination-C1C2-Dap-an-tren-app-Khong-co-dap-an.jpg',
      price: '189.000đ'
    }
  ]

  addToCart(newItem: ItemModel) {
    this.cardEvent.emit(newItem);
  }
}
