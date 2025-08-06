import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Flow {
  id: number;
  name: string;
  status: string;
}

export interface NewFlow {
  title: string;
  turno: string;
  fecha: string; // YYYY-MM-DD
  creado_por: string;
  estado?: string;
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
  private apiUrl = 'https://localhost:5001/api/flows';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getFlows(): Observable<Flow[]> {
    return this.http.get<Flow[]>(this.apiUrl);
  }

  createFlow(flow: NewFlow): Observable<any> {
    const body = { ...flow, estado: flow.estado ?? 'Registrado' };
    return this.http.post<any>(this.apiUrl, body, this.httpOptions);
  }

  getValidation(id: string): Observable<FlowValidation> {
    return this.http.get<FlowValidation>(`${this.apiUrl}/${id}/validation`);
  }
}
