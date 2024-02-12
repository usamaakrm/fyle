import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';

@Component({
  selector: 'fyle-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class UserDetailsComponent {
  @Input() userDetails!: UserDetails | null | any;

}
