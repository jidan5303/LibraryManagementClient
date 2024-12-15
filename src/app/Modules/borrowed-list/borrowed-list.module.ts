import { RouterModule, Routes } from "@angular/router";
import { BorrowedListComponent } from "./borrowed-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared.module";

const routes: Routes = [
    { path: '', component: BorrowedListComponent }
  ]
  @NgModule({
    imports: [
      CommonModule,
      SharedModule.forRoot(),
      RouterModule.forChild(routes),
    ],
    declarations: [BorrowedListComponent]
  })
  export class BorrowedListModule { }