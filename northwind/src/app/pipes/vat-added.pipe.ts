import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value*(rate*rate/100);
  }
  // kelimeleri buyuk kucuk değişik yazdırmaya sağlar yanı elımızdekı verıyı nasıl gostermımızı ıstıyorsak oyle yazdırmamıza yarımcı olur| bu işaret ile yazılır.


}
