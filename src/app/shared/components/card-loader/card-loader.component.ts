import { Component } from '@angular/core';
import {SkeletonModule} from 'primeng/skeleton';

@Component({
  selector: 'fyle-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.scss'],
  standalone:true,
  imports:[SkeletonModule]
})
export class CardLoaderComponent {

}
