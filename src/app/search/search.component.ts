import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticasService } from "../domain/news.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"/*,
    providers: [NoticasService]*/
})
export class SearchComponent implements OnInit {

    constructor(private noticias: NoticasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        //console.log("asdasf");
        this.noticias.agregar("dsf");
        this.noticias.agregar("fsgfd");
        this.noticias.agregar("fsgfd");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
