import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  protected optionsTrabajador = [
    {
      title: "Gestión de Trabajadores",
      icon: "fa-solid fa-user-gear",
      route: "gestion-trabajadores"
    },
    {
      title: "Gestión de Sucursales",
      icon: "fa-solid fa-shop",
      route: "gestion-sucursales"
    },
    {
      title: "Gestion de Proveedores",
      icon: "fa-solid fa-truck",
      route: ""
    },
     {
      title: "Gestion de Insumos",
      icon: "fa-solid fa-barcode",
      route: ""
    },
    {
      title: "Gestion de Lavados",
      icon: "fa-solid fa-car",
      route: ""
    },
    {
      title: "Gestion de Clientes",
      icon: "fa-solid fa-user",
      route: ""
    },
    {
      title: "Registro de Citas",
      icon: "fa-solid fa-calendar-check",
      route: ""
    },
    {
      title: "Facturacion",
      icon: "fa-solid fa-receipt",
      route: ""
    }, 
    {
      title: "Reportes",
      icon: "fa-solid fa-file-pdf",
      route: ""
    }, 
  ];

  protected optionsCliente = [
    {
      title: "Registro de Citas",
      icon: "fa-solid fa-calendar-check",
      route: ""
    },
  ];
  constructor(
    protected loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  protected goTo(route: string): void {
    this.router.navigate([route]);
  }

}