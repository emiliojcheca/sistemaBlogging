import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPublicacion } from '../../interfaces/ipublicacion.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newPublicacion: IPublicacion = {
    titulo: "",
    imagen: "",
    texto: "",
    fecha: new Date()
  }

  fechaUpdated: boolean = false; // para saber si se ha actualizado la fecha

  @Output() publicacionEmitida: EventEmitter<IPublicacion> = new EventEmitter();


  guardar(): void {
    console.log(this.newPublicacion.fecha);
    if (this.newPublicacion.titulo !== "" && this.newPublicacion.imagen !== "" && this.newPublicacion.texto !== "" && this.fechaUpdated) {
      this.publicacionEmitida.emit(this.newPublicacion);
      this.newPublicacion = {
        titulo: "",
        imagen: "",
        texto: "",
        fecha: new Date()
      }
      this.fechaUpdated = false;
    } else {
      alert('Los campos no pueden estar vacíos');
    }
  }

  onDateChange(event:any) {
    this.fechaUpdated = true;
  }
  

 
}
