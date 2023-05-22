import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspirationPageRoutingModule } from './inspiration-routing.module';

import { InspirationPage } from './inspiration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspirationPageRoutingModule
  ],
  declarations: [InspirationPage]
})
export class InspirationPageModule {}
