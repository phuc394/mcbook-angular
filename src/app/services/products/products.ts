import { Injectable } from '@angular/core';
import {ItemModel} from '../../../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class Products {
  totalPrice: number = 0;
  cartList: ItemModel[] = [];
  booklist: ItemModel[] = [
    {
      id: '1',
      title: 'Comprehensive Grammar',
      image: 'https://mcbooks.vn/wp-content/uploads/2025/02/Bia-3D-Comprehensive-Grammar-For-IELTS-Ngu-phap-toan-dien-luyen-thi-IELTS.jpg',
      price: 180000,
      description: 'Cuốn sách được biên soạn dành riêng cho người học IELTS, cung cấp 28 chuyên đề ngữ pháp trọng tâm.',
      quantity: 0,

    },
    {
      id: '2',
      title: 'Destination B2',
      image: 'https://mcbooks.vn/wp-content/uploads/2024/10/Bia-3D-Destination-B2-Dap-an-tren-app-Khong-co-dap-an.jpg',
      price:  186000,
      description: 'Nếu bạn đang tìm một cuốn sách để tự học và luyện thi lấy chứng chỉ B2 thì Destination B2 chính là cuốn sách bạn cần tìm đó.',
      quantity: 0
    },
    {
      id: '3',
      title: 'Destination C1&C2',
      image: 'https://mcbooks.vn/wp-content/uploads/2024/10/Bia-3D-Destination-C1C2-Dap-an-tren-app-Khong-co-dap-an.jpg',
      price: 189000,
      description: 'Destination C1&C2 là cuốn sách luyện thi chứng chỉ tiếng Anh C1 và C2, giúp bạn nâng cao kỹ năng ngôn ngữ của mình.',
      quantity: 0
    },
    {
      id: '4',
      title: 'Tự Học 2000 Từ Vựng',
      image: 'https://mcbooks.vn/wp-content/uploads/2019/07/bia-3d-2000-tu-vung-tieng-anh-theo-chu-de.jpg',
      price: 65000,
      description: 'Cuốn sách này giúp bạn học 2000 từ vựng tiếng Anh theo chủ đề một cách hiệu quả và dễ nhớ.',
      quantity: 0
    },
    {
      id: '5',
      title: 'English Vocabulary',
      image: 'https://mcbooks.vn/wp-content/uploads/2024/11/Bia-3D-Mastering-English-Conversation-180-Ngay-Lam-Chu-Tu-Vung-Tieng-Anh.jpg',
      price: 172000,
      description: 'Cuốn sách này giúp bạn làm chủ từ vựng tiếng Anh trong vòng 180 ngày, với các bài tập và ví dụ thực tế.',
      quantity: 0
    },
    {
      id: '6',
      title: 'Mind Map',
      image: 'https://mcbooks.vn/wp-content/uploads/2022/03/mind-map-english-vocabulary-tang-kem-khoa-hoc-bia-truoc.jpg',
      price: 245000
      , description: 'Mind Map English Vocabulary là cuốn sách giúp bạn ghi nhớ từ vựng tiếng Anh một cách trực quan và hiệu quả thông qua sơ đồ tư duy.',
      quantity: 0
    },
    {
      id: '7',
      title: '4000 từ vựng',
      image: 'https://mcbooks.vn/wp-content/uploads/2019/06/4000-tu-vung-bia-3d.jpg',
      price: 119000,
      description: 'Cuốn sách này cung cấp 4000 từ vựng tiếng Anh thông dụng, giúp bạn nâng cao khả năng giao tiếp và viết lách.',
      quantity: 0
    },
    {
      id: '8',
      title: 'Destination B1',
      image: 'https://mcbooks.vn/wp-content/uploads/2024/10/Bia-3D-Destination-B1-grammar-vocabulary-phien-ban-khong-co-dap-an.jpg',
      price: 178000,
      description: 'Destination B1 là cuốn sách luyện thi chứng chỉ tiếng Anh B1, giúp bạn củng cố ngữ pháp và từ vựng cần thiết.',
      quantity: 0
    },
  ]

  getTotalPrice() {
    this.totalPrice = 0;
    this.cartList.forEach(item => {
      this.totalPrice += item.price * item.quantity;
    });
  }

  getDetailProduct(id: string): ItemModel {
    let product = this.booklist.find(item => item.id === id);
    if (product) {
      return product;
    } else {
      return {} as ItemModel; // Return an empty object if not found
    }
  }

  addtoCart(id: string) {
    let product = this.booklist.find(item => item.id === id);
    if(product) {
      let existingItem = this.cartList.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already in cart
      } else {
        product.quantity = 1; // Set quantity to 1 for new items
        this.cartList.push(product); // Add new item to cart
      }

    }
    console.log(this.cartList);

    this.getTotalPrice();
  }
  deleteCart(id: string) {
    let index = this.cartList.findIndex(item => item.id === id);
    if (index !== -1) {
      this.cartList.splice(index, 1); // Remove item from cart
    }
    this.getTotalPrice();
  }
}
