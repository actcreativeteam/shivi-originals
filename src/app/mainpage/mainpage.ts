import { Component } from '@angular/core';

interface CraftItem {
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-mainpage',
  imports: [],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {
  menuOpen = false;
  currentYear = new Date().getFullYear();

  categories = [
    {
      name: 'Thread Art',
      detail: 'Thoughtful pieces, stitched by hand',
      image:
        'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=85',
    },
    {
      name: 'Personalised Gifts',
      detail: 'Made meaningful, made for them',
      image:
        'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85',
    },
    {
      name: 'Custom Clothing',
      detail: 'Your idea, our little bit of magic',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    },
  ];

  products: CraftItem[] = [
    {
      name: 'Floral Thread Portrait',
      category: 'Personalised keepsake',
      price: 'From ₹899',
      image:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85',
      badge: 'CUSTOM FAVOURITE',
    },
    {
      name: 'Hand-finished Denim',
      category: 'Wearable craft',
      price: 'From ₹1,299',
      image:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85',
    },
    {
      name: 'Little Gift Box',
      category: 'Made to celebrate',
      price: 'From ₹599',
      image:
        'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85',
    },
  ];

  closeMenu(): void {
    this.menuOpen = false;
  }
}
