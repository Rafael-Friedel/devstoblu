import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'novo',
  loadChildren: 
    () => import('./components/cadastrar-produto/cadastrar-produto.module')
    .then((m) => m.CadastrarProdutoModule), 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
