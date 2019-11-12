import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuesComponent } from './add-ques/add-ques.component';
import { ViewAnsComponent } from './view-ans/view-ans.component';
const routes: Routes = [
  { path:'add-question', component: AddQuesComponent },
  { path:'view-ques&ans', component: ViewAnsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
