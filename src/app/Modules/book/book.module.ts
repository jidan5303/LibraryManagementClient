import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./book.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared.module";

const routes: Routes = [
    { path: '', component: BookComponent }
  ]
  @NgModule({
    imports: [
      CommonModule,
      SharedModule.forRoot(),
      RouterModule.forChild(routes),
    ],
    declarations: [BookComponent]
  })
  export class BookModule { }