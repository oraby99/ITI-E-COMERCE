import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoegy'
})
export class UsdtoegyPipe implements PipeTransform 
{

  transform(val: any)
  {
    return val * 15.6;
  }

}
