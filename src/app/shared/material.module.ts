import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
