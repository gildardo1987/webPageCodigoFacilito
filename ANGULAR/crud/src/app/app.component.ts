import { Component } from '@angular/core';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  users :  User[]=[
    {id:1,nombre:"gildardo",apellido:"aguirre"}
  ];

public userSelet: User = new User();
public btnValue: String="Crear Ususario";

public grabarUser(){
    if (this.userSelet.id === 0){ 
      this.userSelet.id= this.users.length+1;
      this.users.push(this.userSelet);
    }
    
    
}

public createOrEdit(){
  if(this.userSelet.id==0){
    let long= this.userSelet.nombre+this.userSelet.apellido;
    if (long.length>0){
      this.grabarUser();
    }else{
      alert("Diligencie todos los campos");
    }
    
      
  }
  this.userSelet= new User();
  this.btnValue="Crear Usuario"
}

public delete(){
  if (confirm("Desea eliminar el Usuario " + this.userSelet.nombre + " "+ this.userSelet.apellido)){
    this.users= this.users.filter(x=> x.id !==this.userSelet.id);
    alert("Usuario eliminado correctamente");
  }
  this.limpiarForm();
}

public rowSelect(a:User){
  this.userSelet=a;
  this.valAction();
}
public limpiarForm(){
  this.userSelet= new User();
  this.valAction();
}
public valAction(){
  if(this.userSelet.id===0){
    this.btnValue="Crear Usuario";
  }else{
    this.btnValue="Modificar Usuario";
  }
}
}
