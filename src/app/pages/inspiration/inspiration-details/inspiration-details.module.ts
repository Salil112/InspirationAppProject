import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspirationDetailsPageRoutingModule } from './inspiration-details-routing.module';

import { InspirationDetailsPage } from './inspiration-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InspirationDetailsPageRoutingModule
  ],
  declarations: [InspirationDetailsPage]
})
export class InspirationDetailsPageModule {}
