import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RepoData } from 'src/app/models/repo-data';

@Component({
  selector: 'fyle-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class RepoCardComponent {
  @Input() repoDetails !:RepoData;
}
