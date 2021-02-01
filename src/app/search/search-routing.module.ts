import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SearchComponent } from "./search.component";

const routes: Routes = [
    { path: "", component: SearchComponent },
    { path: "news", loadChildren: () => import("~/app/news/news.module").then((m) => m.NewsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SearchRoutingModule { }
