import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [HeaderComponent, LoginComponent, PageNotFoundComponent, UserinfoComponent],
  imports: [
    CommonModule, MatButtonModule
  ],
  exports: [ HeaderComponent, LoginComponent, PageNotFoundComponent, UserinfoComponent]
})
export class SharedModule { }
