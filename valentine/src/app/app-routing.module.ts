import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';
import { Menu2Component } from 'src/app/menu2/menu2.component';
import { Menu3Component } from 'src/app/menu3/menu3.component';
const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  // それぞれdataプロパティを追加
  { path: 'menu', component: MenuComponent, data: { animation: 'Page1' } },
  { path: 'menu2', component: Menu2Component, data: { animation: 'Page2' } },
  { path: 'menu3', component: Menu3Component, data: { animation: 'Page3' } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
