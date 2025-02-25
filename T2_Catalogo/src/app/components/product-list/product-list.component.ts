import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, 
      imageUrl: 'https://m.media-amazon.com/images/I/717njqTYEJL.jpg' },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, 
      imageUrl: 'https://m.media-amazon.com/images/I/51AHHmX-17L.jpg' },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, 
      imageUrl: 'https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg' },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, 
      imageUrl: 'https://m.media-amazon.com/images/I/71+qQN-3KvL.jpg' },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, 
      imageUrl: 'https://m.media-amazon.com/images/I/61DPUzgNFjL.jpg' },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, 
      imageUrl: 'https://resources.claroshop.com/medios-plazavip/t1/17115820041jpg' },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, 
      imageUrl: 'https://m.media-amazon.com/images/I/51wzC9+uYgL.jpg' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, 
      imageUrl: 'https://m.media-amazon.com/images/I/616gXw-WpQL.jpg' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, 
      imageUrl: 'https://m.media-amazon.com/images/I/61Ii23HTtNL.jpg' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, 
      imageUrl: 'https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF1000,1000_QL80_.jpg' },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, 
      imageUrl: 'https://m.media-amazon.com/images/I/5169n4UNj5L._AC_UF894,1000_QL80_.jpg' },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, 
      imageUrl: 'https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg' },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, 
      imageUrl: 'https://m.media-amazon.com/images/I/51Q99CZv-SL._AC_UF894,1000_QL80_.jpg' },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, 
      imageUrl: 'https://m.media-amazon.com/images/I/71t1ClD2EtL.jpg' },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, 
      imageUrl: 'https://m.media-amazon.com/images/I/617N9LE+4YL.jpg' }
  ];
   
  selectedProduct: Product | null = null;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}

