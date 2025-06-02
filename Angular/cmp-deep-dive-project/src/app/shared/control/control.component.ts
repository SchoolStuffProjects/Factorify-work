import { afterNextRender, afterRender, Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef)
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  constructor(){
    afterRender(()=>{
      console.log("afterRender")
    })

    afterNextRender(()=>{
      console.log("afterNextRender")
    })
  }

  ngAfterContentInit(){
    
  }

  onClick(){
    /*console.log('Control clicked:', this.label());
    console.log(this.el);*/
    console.log(this.control())
  }
}
