import { Component, Input } from '@angular/core';
import { IPublicacion } from '../../interfaces/ipublicacion.interface';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() blog: IPublicacion[] = [];

  
  insertData($event: any): void {
    if ($event.id === undefined) {
      $event.id = new Date().getTime();
    }
    this.blog.push($event);
  }

}
