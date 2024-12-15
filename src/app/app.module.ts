import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomToastComponent } from './Component/custom-toast/custom-toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared.module';
import { interceptorsLink } from './Common/interceptors/indexLink';
import { MessageHelper } from './Common/helper/messageHelper';
import { HeaderService } from './common/service/header.service';
import { AuthGuard } from './Common/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CustomToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: CustomToastComponent,
      closeButton: true,
      positionClass: 'toast-top-right',
      newestOnTop: false,
    }),
    SharedModule.forRoot(),
  ],
  providers: [
    interceptorsLink,
    MessageHelper,
    HeaderService,
    AuthGuard
  ],
  entryComponents: [CustomToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
