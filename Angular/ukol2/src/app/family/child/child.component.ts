import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() titleChange = new EventEmitter<string>();
  @Output() buttonClicked = new EventEmitter<string>();

  onClick() {
    this.title = 'Změněno v dítěti!';
    this.titleChange.emit(this.title);
    this.buttonClicked.emit('Dítě kliklo!');
  }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.title = input.value;
  }
}