import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fyle-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username :string = '';
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  navigate(){
    if(this.username.trim().length > 0 ){
      this.router.navigate([`/profile/${this.username.trim()}`]);
    }
  }
}
