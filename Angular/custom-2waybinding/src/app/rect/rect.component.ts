import { Component, input, model, output } from '@angular/core';

@Component({
    selector: 'app-rect',
    imports: [],
    templateUrl: './rect.component.html',
    styleUrl: './rect.component.css'
})
export class RectComponent {
  /*size = input.required<{width:string;height:string}>()
  sizeChange = output<{width:string;height:string}>()*/

  size = model.required<{width:string;height:string}>()

  onReset() {
    /*this.sizeChange.emit({
      width: '200',
      height: '100'
    })*/
   this.size.set({
    width: '200',
    height: '100'
   })
  }
}
