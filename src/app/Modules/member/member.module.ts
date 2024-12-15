import { RouterModule, Routes } from "@angular/router";
import { MemberComponent } from "./member.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared.module";

const routes: Routes = [
    { path: '', component: MemberComponent }
  ]
  @NgModule({
    imports: [
      CommonModule,
      SharedModule.forRoot(),
      RouterModule.forChild(routes),
    ],
    declarations: [MemberComponent]
  })
  export class MemberModule { }