import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FriendsRoutingModule } from "./friends-routing.module";
import { FriendsComponent } from "./friends.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FriendsRoutingModule
    ],
    declarations: [
        FriendsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FriendsModule { }