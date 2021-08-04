import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'paypdfview'
})
export class PaypdfviewPipe implements PipeTransform {

  constructor(private dom:DomSanitizer){}
  transform(value:any) {
    return this.dom.bypassSecurityTrustResourceUrl(value)
  }

}


