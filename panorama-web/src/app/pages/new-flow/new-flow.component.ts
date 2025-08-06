import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlowService } from '../../services/flow.service';

@Component({
  selector: 'app-new-flow',
  templateUrl: './new-flow.component.html',
  styleUrls: ['./new-flow.component.css']
})
export class NewFlowComponent {
  flowName = '';
  file?: File;

  constructor(private flowService: FlowService, private router: Router) {}

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.file = files[0];
    }
  }

  create() {
    this.flowService
      .createFlow({ name: this.flowName, file: this.file })
      .subscribe(() => {
        this.router.navigate(['/flujos']);
      });
  }
}
