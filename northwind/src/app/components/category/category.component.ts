import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { UrunService } from 'src/app/services/urun.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[];
  currentCategory:Category;
  constructor(private categoryservice:CategoryService) { }

  
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryservice.getCategory().subscribe(response=>{
      this.categories=response
    });

  }
  setCurrentCategory(category:Category) // seçilen kategoriyi yazar
  {
   this.currentCategory=category;

  }
 
  getCurrentCategoryClass(category:Category) // seçilen kategoriyi mavi renge boyar 
  {
     if(category==this.currentCategory){
       return "list-group-item active"
     }
     else
     {
      return "list-group-item"
     }
  }
  getAllCategory()
  {
    if(!this.currentCategory)
    {
      return "list-group-item active"
    }
    else
    {
      return "list-group-item"
    }
  }
  
}
