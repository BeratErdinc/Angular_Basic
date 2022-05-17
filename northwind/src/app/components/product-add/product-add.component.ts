import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UrunService } from 'src/app/services/urun.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private productservice:UrunService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm()
  {
    this.productAddForm = this.formBuilder.group({
      urunAd:["",Validators.required],
      urunMarka:["",Validators.required],
      urunStok:["",Validators.required],
      kategoriId:["",Validators.required],
      satısFiyat:["",Validators.required],
      alısFiyat:["",Validators.required]

    })
  }
  add()
  {
    if(this.productAddForm.valid)
    {
   let procutmodel= Object.assign({},this.productAddForm.value)
   this.productservice.add(procutmodel).subscribe(data=>{
     console.log(data)
    this.toastrService.success("Ürün Eklendi","Başarılı")
   })
    }
    else
    {
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
   
  }
}
