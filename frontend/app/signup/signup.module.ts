import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SignUpRoutingModule } from "~/signup/signup-routing.module";
import { SignUpComponent } from "~/signup/signup.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SignUpRoutingModule,
    ],
    declarations: [
        SignUpComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignUpModule { }