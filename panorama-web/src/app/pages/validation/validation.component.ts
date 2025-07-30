import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowService, FlowValidation } from '../../services/flow.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  id!: string;
  validation?: FlowValidation;

  constructor(private route: ActivatedRoute, private flowService: FlowService) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      this.flowService.getValidation(this.id).subscribe(v => this.validation = v);
    });
  }
}
