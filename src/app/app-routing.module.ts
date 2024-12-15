import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  {path: 'book', loadChildren: () => import('./Modules/book/book.module').then(m => m.BookModule)},
  {path: 'member', loadChildren: () => import('./Modules/member/member.module').then(m => m.MemberModule)},
  {path: 'borrowed-list', loadChildren: () => import('./Modules/borrowed-list/borrowed-list.module').then(m => m.BorrowedListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
