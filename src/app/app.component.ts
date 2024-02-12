import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { IPublicacion } from './interfaces/ipublicacion.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrPublicaciones: IPublicacion[] = [
    {
      id: 1,
      titulo: "Los portugueses mejoran su salud física y mental. Su elixir milagroso: la semana laboral de cuatro días",
      imagen: "https://i.blogs.es/6188bd/jornada-laboral-portugal/500_333.jpeg",
      texto: `El estudio preliminar sobre el proyecto de la semana laboral de cuatro días portugués que 
      comenzó en junio de 2023, apunta a que los empleados de las empresas que se acogieron a este programa 
      mejoraron su salud física y metal durante los meses que ha durado la prueba.

      El informe, que todavía se encuentra en progreso y que se estima que se completará en abril de 2024, 
      se basa en los datos aportados por 200 empleados, así como por los responsables de las empresas que 
      participaron en el piloto. El 95% de las empresas consideró que los cambios que produjeron para este 
      proyecto son positivos. Según la plantilla, las mejoras más destacables que se produjeron en ese periodo 
      fueron a nivel de salud mental y física.`,
      fecha: new Date("2024-02-10")
    },
    {
      id: 2,
      titulo: "Esta es la máquina de fabricación de chips más avanzada del planeta. Es espectacular y su complejidad roza lo inaudito",
      imagen: "https://i.blogs.es/060407/asml-ap/500_333.jpeg",
      texto: `Pesa tanto como dos Airbus A320 e incorpora más de 100.000 piezas, 3.000 cables, 40.000 pernos, 
      y también más de 2 km de conexiones eléctricas. El equipo de fotolitografía TWINSCAN EXE:5000 diseñado y 
      fabricado por ASML es la máquina de producción de circuitos integrados más sofisticada que existe. 
      Y también la más cara. La información más actualizada que tenemos refleja que uno solo de estos equipos 
      cuesta 350 millones de euros, lo que con toda seguridad provocará que algunos fabricantes de chips se lo 
      piensen dos veces antes de comprarlo.`,
      fecha: new Date("2024-02-11")
    }
  ]
}
