import { Pipe, PipeTransform } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';
import { Urun } from '../models/urun';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Urun[], filterText:string): Urun[] {   //aramada value tablonun oldugu yer yazılır  : noktadan sonrası donuş değeri olur
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Urun)=>p.urunAd.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
