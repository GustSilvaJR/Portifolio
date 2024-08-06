import { Component, Input, OnInit } from '@angular/core';
import { FetchProjectsService } from 'src/app/shared/services/fetch-projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  @Input() project: any;

  public technologies: any = [];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private fetchProjectsService: FetchProjectsService ){}

  ngOnInit(): void {
    this.fetchProjectsService.getLangugagesFromProject(this.project.languages_url)
      .subscribe((languages) => {
        this.technologies = Object.keys(languages);

        if(this.technologies.length == 0){
          this.technologies.push(this.capitalize(this.project.topics[0]));
        }

        console.log(languages, this.technologies, typeof this.technologies);
      });
  }

  capitalize(word: string) {
    if (typeof word !== 'string' || word.length === 0) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

}
