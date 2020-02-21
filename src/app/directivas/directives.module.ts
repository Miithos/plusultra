import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestringirTipoDirective} from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestringirTipoDirective],
  exports: [RestringirTipoDirective],
})
export class DirectivesModule { }
