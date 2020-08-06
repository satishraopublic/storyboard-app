import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { DisplayuserComponent } from './components/displayuser/displayuser.component';


@NgModule({
  declarations: [HeaderComponent, LoginComponent, PageNotFoundComponent, DisplayuserComponent],
  imports: [
    CommonModule, MatButtonModule
  ],
  exports: [ HeaderComponent, LoginComponent, PageNotFoundComponent, DisplayuserComponent]
})
export class SharedModule { }
