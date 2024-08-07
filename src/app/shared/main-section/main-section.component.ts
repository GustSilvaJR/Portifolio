import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {

  donwloadCurr(): void{
    const link = document.createElement('a');
    link.href = 'assets/curriculo/curriculo.pdf';
    link.download = 'curriculo.pdf';
    link.click();
  }

}
