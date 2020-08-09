import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DisplayuserComponent } from './shared/components/displayuser/displayuser.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreatestoryboardComponent } from './createstoryboard/createstoryboard.component';
import { FramecreatorComponent } from './framecreator/framecreator.component';
import { FrameworkerComponent } from './frameworker/frameworker.component';
import { InputframeinfoComponent } from './inputframeinfo/inputframeinfo.component';
import { MatDialogModule, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FrameImageViewerComponent } from './frame-image-viewer/frame-image-viewer.component';
import { FrameMetaDataComponent } from './frame-meta-data/frame-meta-data.component';
import { FileImageDropComponent } from './file-image-drop/file-image-drop.component';
import { DndDirective } from './directives/dnd.directive';
import { FrameViewerComponent } from './frame-viewer/frame-viewer.component';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    DisplayuserComponent,
    ProfileComponent,
    CreatestoryboardComponent,
    FramecreatorComponent,
    FrameworkerComponent,
    InputframeinfoComponent,
    FrameImageViewerComponent,
    FrameMetaDataComponent,
    FileImageDropComponent,
    DndDirective,
    FrameViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    AngularCropperjsModule,
    MatButtonModule, MatChipsModule, MatCardModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
