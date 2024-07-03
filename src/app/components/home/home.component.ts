import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Repository } from 'src/app/interfaces/repository.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  repositories: Repository[] = [];

  constructor(private githubService:GithubService){}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (response)=>{
        console.log("Response:",response);
        this.repositories = response.body ?? [];
      }
    })
  }

}
