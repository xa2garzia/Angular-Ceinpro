"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importamos la clase Component del paquete angular/core
// Los {} valen para declarar variables tipo objeto
// Obligatorio
var core_1 = require("@angular/core");
//import { ngModel } from '@angular/';
var Jugador = (function () {
    function Jugador() {
    }
    return Jugador;
}());
exports.Jugador = Jugador;
var JUGADORES = [
    { id: 1, name: "Avelino", presentacion: "Alo1" },
    { id: 2, name: "Manuek", presentacion: "Alo2" },
    { id: 3, name: "Abel", presentacion: "Alo3" },
    { id: 4, name: "Jose", presentacion: "Alo4" },
    { id: 5, name: "Braulia", presentacion: "Alo5" },
    { id: 6, name: "Txumari", presentacion: "Alo6" },
    { id: 7, name: "Felix", presentacion: "Alo7" },
    { id: 8, name: "Juana", presentacion: "Alo8" },
    { id: 9, name: "Pedro", presentacion: "Alo9" },
    { id: 10, name: "Josefa", presentacion: "Alo11" }
];
// Una vez importado lo configuramos
var AppComponent = (function () {
    function AppComponent() {
        //title='Ranking de jugadores';
        this.name = 'Angular 2';
        this.berenjenas = 'ssss';
        this.jugadores = JUGADORES;
        this.player = {
            id: 1,
            name: 'Braulio',
            presentacion: 'Hola'
        };
        this.presentacion = 'Holla me llamo';
    }
    AppComponent.prototype.OnSelect = function (player) {
        alert(player.presentacion);
        //console.log(window['']);
        //Esto es un truco guaroo para acceder a objetso que están en el espacio de nombres global
        //No tenemos acceso a habla (index.html) que es global
        //habla(player.presentacion);
        //windows['habla'](player.presentacion);        
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>Hola, {{name}}</h1>\n    <hr>\n    <ul class='jugadores'>\n        //Mayusuclas en constante\n        <!--<li *ngFor=\"let player of JUGADORES\">-->\n        <li *ngFor=\"let player of jugadores\" (click)=\"OnSelect(player)\">\n            <span class=\"badge\"> {{player.id}}</span> {{player.name}}\n        </li>\n    </ul>\n    <hr>\n    <h2>Alo {{player.name}} </h2>\n    <div>Id: {{player.id}}</div>\n    <div>{{berenjenas | uppercase}}</div>\n    <div>\n        <label>Nombre:</label>\n        <input [(ngModel)] = \"player.name\" placeholder=\"...\" class=\"form-control\">\n    </div>\n    <div>\n        <label>Presentaci\u00F3n: </label>\n        <textarea [(ngModel)] = \"player.presentacion\" placeholder=\"...\" class=\"form-control\"></textarea>\n    </div>\n    ",
        styles: ["\n        .selected {}\n        .jugadores {\n            padding: 10px;\n            list-style-type:none;\n        }\n        .jugadores li \n            { \n            background-color: #EEE;\n            height: 40px;\n            line-height: 40px;\n            list-style-type:none;\n            border-bottom: 1px solid #DDD;\n        }\n        .jugadores li.selected:hover{\n            background-color: #FC0;\n        }\n        .jugadores li:hover{}\n        .jugadores .text{}\n        .jugadores .badge{\n            border-radius:0;\n            width:40px;height=40px;\n            line-height:40px;\n            border-bottom: 1px solid #CCC;\n            padding: 0;\n            background-color: #666;\n        }\n    "],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map