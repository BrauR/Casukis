import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info = InfoPage;
  fav = FavoritosPage;
  favoritos = [];

  constructor(public navCtrl: NavController) {

  }
  casas = [
    {id: 0, 
    nombre: "1",
    lugar: "Suburbios de Dimmsdale, California." ,
    precio: "$1,225,000 ", 
    cuartos: "4",
    banos: "2 y medio", 
    vendedor: "Dom Dimadom dueño del Domodim de Dimsdale", 
    imagen: "../assets/imgs/casa1.jpg",
    
    },

     {id: 1, 
     nombre: "1",
     lugar: "Isla de Honshu, Japón." ,
     precio: "$1,735,000 ", 
     cuartos: "3",
     banos: "1", 
     vendedor: "Kame-Sen'nin (maestro Roshi)", 
     imagen: "../assets/imgs/kamehouse.jpg"},

     {id: 2, 
      nombre: "1",
      lugar: "Egipto, El Cairo." ,
      precio: "JOJOOOOOO", 
      cuartos: "Too many",
      banos: "2", 
      vendedor: "KONO DIO DAAAA", 
      imagen: "../assets/imgs/DIOOO.png"},

      {id: 3, 
        nombre: "1",
        lugar: "York, Inglaterra." ,
        precio: "$20,000,000", 
        cuartos: "21",
        banos: "5", 
        vendedor: "George Joestar", 
        imagen: "../assets/imgs/joestar.jpg"},

      {id: 4, 
        nombre: "1",
        lugar: "Fredericksburg, Esados Unidos." ,
        precio: "$3,000,000", 
        cuartos: "3",
        banos: "2", 
        vendedor: "El viejo Nebbercracker", 
        imagen: "../assets/imgs/mh.jpg"},

        {id: 5, 
        nombre: "1",
        lugar: "Una piña debajo del mar." ,
        precio: "$1,000,000", 
        cuartos: "2",
        banos: "2", 
        vendedor: "Bob Pantalones Cuadrados", 
        imagen: "../assets/imgs/piña.jpg"},

        {id: 6,
        nombre: "1", 
        lugar: "Springfield Oregon" ,
        precio: "$4,000,000", 
        cuartos: "4",
        banos: "2", 
        vendedor: "Homero Simpson", 
        imagen: "../assets/imgs/casa2.jpg"},
    
  
  ];

  clickInfo (c)
  {
    this.navCtrl.push(this.info, {casas: c, favoritos: this.favoritos});
  }

  clickFav ()
  {
    this.navCtrl.push(this.fav, {favoritos: this.favoritos});
  }


}
