import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {class: 'dashboard-item'},
  encapsulation: ViewEncapsulation.None
})
export class DashboardItemComponent {
  @Input({required: true}) image!:{source:string, alt:string};
  @Input({required: true}) title!:string;
}
