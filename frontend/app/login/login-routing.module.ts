import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login.component";
import { SignUpComponent } from "../signup/signup.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "/signup", component: SignUpComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LoginRoutingModule { }
