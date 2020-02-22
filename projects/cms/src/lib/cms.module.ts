import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './components/element/element.component';
import { PageComponent } from './components/page/page.component';
import { ElementManagerService } from './services/element-manager.service';

@NgModule({
  declarations: [
    ElementComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageComponent,
  ],
  providers: [
    ElementManagerService,
  ]
})
export class CmsModule { }
