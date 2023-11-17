import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UnauthorizedPageComponent } from './components/unauthorized-page/unauthorized-page.component';
import { CardDesignComponent } from './components/card-design/card-design.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { RatingComponent } from './components/rating/rating.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    UnauthorizedPageComponent,
    CardDesignComponent,
    LandingPageComponent,
    HeaderComponent,
    RatingComponent,
    FileUploadComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [
    CardDesignComponent,
    LandingPageComponent,
    HeaderComponent,
    RatingComponent,
    FileUploadComponent,
  ],
})
export class SharedModule {}
