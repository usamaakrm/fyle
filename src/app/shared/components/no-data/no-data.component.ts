import { Component, Input } from '@angular/core';

@Component({
  selector: 'fyle-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
  standalone:true
})
export class NoDataComponent {
  @Input() message !:string;
}
