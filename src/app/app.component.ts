
// Importamos la clase Component del paquete angular/core
// Los {} valen para declarar variables tipo objeto
// Obligatorio
import { Component } from '@angular/core';
//import { ngModel } from '@angular/';

export class Jugador {
    id: number;
    name: string;
    presentacion: string;
}

const JUGADORES: Jugador[] = [
    {id:1, name:"Avelino", presentacion:"Alo1"},
    {id:2, name:"Manuek", presentacion:"Alo2"},
    {id:3, name:"Abel", presentacion:"Alo3"},
    {id:4, name:"Jose", presentacion:"Alo4"},
    {id:5, name:"Braulia", presentacion:"Alo5"},
    {id:6, name:"Txumari", presentacion:"Alo6"},
    {id:7, name:"Felix", presentacion:"Alo7"},
    {id:8, name:"Juana", presentacion:"Alo8"},
    {id:9, name:"Pedro", presentacion:"Alo9"},
    {id:10, name:"Josefa", presentacion:"Alo11"}      
];

// Una vez importado lo configuramos
@Component({
  selector: 'my-app',
  template: `
    <h1>Hola, {{name}}</h1>
    <hr>
    <ul class='jugadores'>
        //Mayusuclas en constante
        <!--<li *ngFor="let player of JUGADORES">-->
        <li *ngFor="let player of jugadores" (click)="OnSelect(player)">
            <span class="badge"> {{player.id}}</span> {{player.name}}
        </li>
    </ul>
    <hr>
    <h2>Alo {{player.name}} </h2>
    <div>Id: {{player.id}}</div>
    <div>{{berenjenas | uppercase}}</div>
    <div>
        <label>Nombre:</label>
        <input [(ngModel)] = "player.name" placeholder="..." class="form-control">
    </div>
    <div>
        <label>Presentación: </label>
        <textarea [(ngModel)] = "player.presentacion" placeholder="..." class="form-control"></textarea>
    </div>
    `, 
    styles: [`
        .selected {}
        .jugadores {
            padding: 10px;
            list-style-type:none;
        }
        .jugadores li 
            { 
            background-color: #EEE;
            height: 40px;
            line-height: 40px;
            list-style-type:none;
            border-bottom: 1px solid #DDD;
        }
        .jugadores li.selected:hover{
            background-color: #FC0;
        }
        .jugadores li:hover{}
        .jugadores .text{}
        .jugadores .badge{
            border-radius:0;
            width:40px;height=40px;
            line-height:40px;
            border-bottom: 1px solid #CCC;
            padding: 0;
            background-color: #666;
        }
    `],
})

//export indica que es un componente público
//Además hereda de la clase @Component ya que se hace un import
export class AppComponent{ 
    //title='Ranking de jugadores';
    name='Angular 2'; 
    berenjenas = 'ssss';
    jugadores = JUGADORES;
    player:Jugador={
        id:1,
        name: 'Braulio',
        presentacion:'Hola'
        
    }
    presentacion = 'Holla me llamo';
    OnSelect (player: Jugador): void{
            alert(player.presentacion);
            //console.log(window['']);
            //Esto es un truco guaroo para acceder a objetso que están en el espacio de nombres global
            //No tenemos acceso a habla (index.html) que es global
            //habla(player.presentacion);
            //windows['habla'](player.presentacion);        
        };
}







