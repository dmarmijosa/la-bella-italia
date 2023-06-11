import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private translateService: TranslateService){

  }
  cambiarIdioma(idioma:string){
    this.translateService.use(idioma);
  }
}
