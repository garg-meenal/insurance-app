import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'policy',
    loadChildren: () =>
      import('mfePolicy/Module').then((m) => m.PolicyDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('mfePayment/Module').then((m) => m.PremiumPaymentModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
