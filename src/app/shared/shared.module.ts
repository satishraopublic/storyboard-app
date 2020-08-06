import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { DisplayuserComponent } from './components/displayuser/displayuser.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [HeaderComponent, LoginComponent, PageNotFoundComponent, DisplayuserComponent, ProfileComponent],
  imports: [
    CommonModule, MatButtonModule, MatCardModule, MatChipsModule
  ],
  exports: [ HeaderComponent, LoginComponent, PageNotFoundComponent, DisplayuserComponent, MatButtonModule, MatCardModule, MatChipsModule]
})
export class SharedModule { }
