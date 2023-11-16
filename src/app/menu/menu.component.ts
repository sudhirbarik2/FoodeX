import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentMenu : any=[1,2,3,4,5,6,7,8]
  fetchMenu(foodType: string){
    if(foodType==='all'){
      this.currentMenu=[1,2,3,4,5,6,7,8]
    }
    else if(foodType==='starter'){
      this.currentMenu=[1,2]
    }
    else if(foodType==='veg'){
      this.currentMenu=[8]
    }
    else if(foodType==='nonVeg'){
      this.currentMenu=[1,2,3]
    }
    else if(foodType==='pnb'){
      this.currentMenu=[1,2,3,4]
    }
    else if(foodType==='salad'){
      this.currentMenu=[1,2,3,4,5,]
    }
    else {
      this.currentMenu=[1,2,3,4,5,6]
    }
  }
}
