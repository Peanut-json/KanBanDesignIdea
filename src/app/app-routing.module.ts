import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './Pages/main-view/main-view.component';

const routes: Routes = [  // * using routing again to path to diffrent parts of the application, 
                         //  * using pathing to the SPECIFIC area and then have it linked to the Component of choice.  
{
  path: '' ,
  
  component: MainViewComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
