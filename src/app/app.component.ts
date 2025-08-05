import {ItemModel} from '../models/item.model';


export class AppComponent {
      cartItems: ItemModel[] = [];
      addToCart(newItem: ItemModel) {
        this.cartItems.push(newItem);
        console.log('Item added to cart:', newItem);
      }
      booklist: ItemModel[] = [
        {
          id: 1,
          title: 'Comprehensive Grammar For IELTS – Ngữ pháp toàn diện luyện thi IELTS',
          image: 'https://mcbooks.vn/wp-content/uploads/2025/02/Bia-3D-Comprehensive-Grammar-For-IELTS-Ngu-phap-toan-dien-luyen-thi-IELTS.jpg',
          price: 180000
        },
        {
          id: 2,
          title: 'Mastering English Vocabulary – 180 Ngày Làm Chủ Từ Vựng Tiếng Anh',
          image: 'https://mcbooks.vn/wp-content/uploads/2024/11/Bia-3D-Mastering-English-Conversation-180-Ngay-Lam-Chu-Tu-Vung-Tieng-Anh.jpg',
          price: 172000
        },
        {
          id: 3,
          title: 'Destination B2 - Grammar & Vocabulary with Answer Key On MCBooks App',
          image: 'https://mcbooks.vn/wp-content/uploads/2024/10/Bia-3D-Destination-B2-Dap-an-tren-app-Khong-co-dap-an.jpg',
          price: 180000
        },
        {
          id: 4,
          title: 'Destination C1&C2 - Grammar & Vocabulary with Answer Key On MCBooks App',
          image: 'https://mcbooks.vn/wp-content/uploads/2024/10/Bia-3D-Destination-C1C2-Dap-an-tren-app-Khong-co-dap-an.jpg',
          price: 189000
        }
      ]
}
