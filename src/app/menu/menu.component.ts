import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentMenu : any=[
    {imglink:'../../assets/img/specials-1.png'},
    {imglink:'../../assets/img/specials-2.png'},
    {imglink:'../../assets/img/specials-3.png'},
    {imglink:'../../assets/img/specials-4.png'},
    {imglink:'../../assets/img/specials-5.png'},
    {imglink:'../../assets/img/specials-1.png'},
    {imglink:'../../assets/img/specials-1.png'},
    {imglink:'../../assets/img/specials-1.png'},
    {imglink:'../../assets/img/specials-1.png'}
  ]
  fetchMenu(foodType: string){
    if(foodType==='all'){
      this.currentMenu=[
        {imglink:'../../assets/img/specials-4.png'},
        {imglink:'../../assets/img/specials-5.png'},
        {imglink:'../../assets/img/specials-2.png'},
        {imglink:'../../assets/img/specials-1.png'},
        {imglink:'../../assets/img/specials-3.png'},
        {imglink:'../../assets/img/specials-1.png'},
        {imglink:'../../assets/img/specials-1.png'},
        {imglink:'../../assets/img/specials-1.png'},
        {imglink:'../../assets/img/specials-1.png'}
      ]
    }
    else if(foodType==='starter'){
      this.currentMenu=[
        {imglink:'../../assets/img/specials-2.png'},
        {imglink:'../../assets/img/specials-4.png'},
        {imglink:'../../assets/img/specials-5.png'}
      ]
    }
    else if(foodType==='veg'){
      this.currentMenu=[
        {imglink:'../../assets/img/specials-2.png'},
        {imglink:'../../assets/img/specials-4.png'}
      ]
    }
    else if(foodType==='nonVeg'){
      this.currentMenu=[
        {imglink:'../../assets/img/specials-3.png'},
        {imglink:'../../assets/img/specials-2.png'},
        {imglink:'../../assets/img/specials-5.png'},
        {imglink:'../../assets/img/specials-1.png'}
      ]
    }
    else if(foodType==='pnb'){
      this.currentMenu=[
        {imglink:'../../assets/img/specials-5.png'}
      ]
    }
    else if(foodType==='salad'){
      this.currentMenu=[
        {imglink:'../../assets/img/specials-1.png'},
        {imglink:'../../assets/img/specials-2.png'},
        {imglink:'../../assets/img/specials-3.png'},
        {imglink:'../../assets/img/specials-4.png'},
        {imglink:'../../assets/img/specials-5.png'},
        {imglink:'../../assets/img/specials-6.png'},
        {imglink:'../../assets/img/specials-1.png'},
        {imglink:'../../assets/img/specials-2.png'}
      ]
    }
    else {
      this.currentMenu=[
        {imglink:'../../assets/img/specials-6.png'},
        {imglink:'../../assets/img/specials-5.png'},
        {imglink:'../../assets/img/specials-4.png'},
        {imglink:'../../assets/img/specials-3.png'},
        {imglink:'../../assets/img/specials-2.png'},
        {imglink:'../../assets/img/specials-1.png'}
      ]
    }
  }
}
