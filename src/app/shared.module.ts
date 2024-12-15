import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatchPasswordDirective } from './Common/directives/match-password.directive';
import { CustomDateFormatPipe } from './Common/pipes/datefilter.pipe';
import { UrlifyPipe } from './Common/pipes/Urlify.pipe';
import { PhoneNumberPipe } from './Common/pipes/PhoneNumber.pipe';
import { AttachmentExtensionPipe } from './Common/pipes/AttachmentExtension.pipe';
import { MessageHelper } from './Common/helper/messageHelper';
import { HttpHelper } from './Common/helper/httpHelper';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    declarations: [
        MatchPasswordDirective,
        // pipes
        CustomDateFormatPipe,
        UrlifyPipe,
        PhoneNumberPipe,
        AttachmentExtensionPipe
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        NgProgressModule.withConfig({
            color: '#D73428',
            spinner: false
        }),
        NgProgressHttpModule,
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
    ],
    exports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MatchPasswordDirective,

        // pipes
        CustomDateFormatPipe,
        UrlifyPipe,
        PhoneNumberPipe,
        AttachmentExtensionPipe,
        TabsModule,
        ModalModule,
        TooltipModule,
        BsDropdownModule,
        BsDatepickerModule
    ],
    bootstrap: [AppComponent],
    providers: [MessageHelper]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [HttpHelper]
        };
    }
}
