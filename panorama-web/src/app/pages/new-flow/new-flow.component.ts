import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlowService } from '../../services/flow.service';

@Component({
  selector: 'app-new-flow',
  templateUrl: './new-flow.component.html',
  styleUrls: ['./new-flow.component.css']
})
export class NewFlowComponent {
  title = '';
  turno = '';
  fecha = '';
  creadoPor = '';
  estado = '';

  constructor(private flowService: FlowService, private router: Router) {}

  create() {
    this.flowService
      .createFlow({
        title: this.title,
        turno: this.turno,
        fecha: this.fecha,
        creado_por: this.creadoPor,
        estado: this.estado || undefined,
      })
      .subscribe(() => {
        this.router.navigate(['/flujos']);
      });
  }
}
