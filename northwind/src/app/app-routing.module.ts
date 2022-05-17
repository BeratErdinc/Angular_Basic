import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

// sayfa yonlendırme
const routes: Routes = [
{path:"",pathMatch:"full",component:ProductComponent},
{path:"product",component:ProductComponent},
{path:"product/category/:kategoriId",component:ProductComponent},
{path:"product/add",component:ProductAddComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
