import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 追加！
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { QuestionComponent } from './question/question.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ResultComponent } from './result/result.component'; 
// const routes: Routes = [
//   { path: '', redirectTo: 'page1', pathMatch: 'full' },
//   // それぞれdataプロパティを追加
//   { path: 'menu', component: MenuComponent, data: { animation: 'Page1' } },
//   { path: 'menu2', component: Menu2Component, data: { animation: 'Page2' } },
//   { path: 'menu3', component: Menu3Component, data: { animation: 'Page3' } },
//   { path: 'result', component: ResultComponent, data: { animation: 'Page4' } },
// ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    QuestionComponent,
    FooterComponent,
    Menu2Component,
    Menu3Component,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // 追加！
    MatButtonModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    // RouterModule.forRoot(
    //   routes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
