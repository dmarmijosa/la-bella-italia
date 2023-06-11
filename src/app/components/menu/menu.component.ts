import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/interfaces/menu.interface';
import { MenuPrincipalService } from 'src/app/services/menu-principal.service';
import { TapasService } from 'src/app/services/tapas.service';
import { tapaItem } from '../../interfaces/tapas.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuPrincipal: menuItem[] = [];
  menuTapas:tapaItem[]=[];
  constructor(
    private menuService: MenuPrincipalService,
    private tapasService: TapasService
  ) {}
  ngOnInit(): void {
    this.menuService.getPizzasPrincipal().subscribe((resp: any) => {
      this.menuPrincipal = resp.menuprincipal;
    });
    this.tapasService.getTapas().subscribe((resp:any)=>{
      this.menuTapas = resp.tapas;

    })
  }
}
