import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule,
        HttpClientModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }