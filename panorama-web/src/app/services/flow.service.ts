import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Flow {
  id: number;
  name: string;
  status: string;
}

export interface FlowValidationDiff {
  status: 'ok' | 'error' | 'warn';
  message: string;
}

export interface FlowValidation {
  ocVsSap: FlowValidationDiff[];
  dlx: FlowValidationDiff[];
}

@Injectable({ providedIn: 'root' })
export class FlowService {
  private apiUrl = '/api/flows';

  constructor(private http: HttpClient) {}

  getFlows(): Observable<Flow[]> {
    return this.http.get<Flow[]>(this.apiUrl);
  }

  createFlow(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('name', data.name);
    if (data.file) {
      formData.append('file', data.file);
    }
    return this.http.post(this.apiUrl, formData);
  }

  getValidation(id: string): Observable<FlowValidation> {
    return this.http.get<FlowValidation>(`${this.apiUrl}/${id}/validation`);
  }
}
