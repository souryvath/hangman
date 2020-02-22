import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';

@NgModule({
  declarations: [
  ],
  exports: [
    MaterialModule,
    SharedLibsModule,
    FlexLayoutModule
  ],
  imports: [
    MaterialModule,
    SharedLibsModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
