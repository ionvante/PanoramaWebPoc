import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FlowsComponent } from './pages/flows/flows.component';
import { NewFlowComponent } from './pages/new-flow/new-flow.component';
import { ValidationComponent } from './pages/validation/validation.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'flujos', component: FlowsComponent },
  { path: 'nuevo', component: NewFlowComponent },
  { path: 'validacion/:id', component: ValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
