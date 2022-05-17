import { Component, OnInit } from '@angular/core';
import { Urun } from 'src/app/models/urun';
import {HttpClient} from '@angular/common/http'
import { UrunService } from 'src/app/services/urun.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  products:Urun[] = [];
  filterText="";
 
  constructor(private urunservice:UrunService,private activedRoute:ActivatedRoute, private toastrService:ToastrService, 
    private carttservice:CartService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["kategoriId"])
      {
        this.getUrunsByCategory(params["kategoriId"])
      }
      else
      {
        this.getUruns();
      }
    })
  }

  getUruns(){
 this.urunservice.getUruns().subscribe(response=>{
   this.products=response
 });
  }
  getUrunsByCategory(categoryId:number){
    this.urunservice.getUrunsByCategory(categoryId).subscribe(response=>{
      this.products=response
    });
     }

  addToCart(product:Urun){
    if(product.urunId==1)
    {
      this.toastrService.error("Bu urun Sepete Eklenemez");

    }
    else
    {
      this.toastrService.success("Sepete Eklendi",product.urunAd)
      this.carttservice.addToCart(product);
    }
  }

  

}
