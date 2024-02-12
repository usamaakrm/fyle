import { Component } from '@angular/core';
import {SkeletonModule} from 'primeng/skeleton';

@Component({
  selector: 'fyle-user-details-loader',
  templateUrl: './user-details-loader.component.html',
  styleUrls: ['./user-details-loader.component.scss'],
  standalone:true,
  imports:[SkeletonModule]
})
export class UserDetailsLoaderComponent {

}
