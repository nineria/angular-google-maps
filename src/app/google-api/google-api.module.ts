import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleApiComponent } from './google-api.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GoogleApiComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [GoogleApiComponent],
})
export class GoogleApiModule {}
