import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form")
  add = output<{title:string;text:string}>()

  ngOnInit(){
    console.log("OnInit")
    console.log(this.form().nativeElement)
  }

  ngAfterViewInit(){
    console.log("AfterViewInit")
    console.log(this.form().nativeElement)
  }

  onSubmit(title:string, ticketText:string, form:HTMLFormElement){
    this.add.emit({title:title, text:ticketText})
    this.form().nativeElement.reset()
  }
}