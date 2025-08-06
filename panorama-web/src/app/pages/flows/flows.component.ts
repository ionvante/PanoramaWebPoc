import { Component, OnInit } from '@angular/core';
import { FlowService, Flow } from '../../services/flow.service';

@Component({
  selector: 'app-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.css']
})
export class FlowsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'status'];
  dataSource: Flow[] = [];

  constructor(private flowService: FlowService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.flowService.getFlows().subscribe(flows => (this.dataSource = flows));
  }
}
