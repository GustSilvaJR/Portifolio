import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FetchProjectsService } from 'src/app/shared/services/fetch-projects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects:any = [];

  constructor(private fetchProjectsService: FetchProjectsService ){}

  ngOnInit(): void {
    this.fetchProjectsService.getProjectsFromGit("GustSilvaJR").subscribe((projects) => {
      console.log('meus projetos: ', projects, projects.filter((project: any) => project.name !== "Gustsilvajr"));
      this.projects = projects.filter((project: any) => project.name !== "GustSilvaJR" &&  project.name !== "Portifolio")
    });

  }

  redirectToProjects(): void{
    window.location.href = environment.githubPage;
  }
}
