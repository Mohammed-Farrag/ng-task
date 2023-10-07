import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphViewComponent } from './components/graph-view/graph-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'graph', pathMatch: 'full'},
  {path: 'graph', component:  GraphViewComponent},
  {path: 'list', component:  ListViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
