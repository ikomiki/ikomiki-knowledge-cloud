import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CustomMaterialModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
