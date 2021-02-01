import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticasService } from "../domain/news.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"/*,
    providers: [NoticasService]*/
})
export class SearchComponent implements OnInit {

    resultados:Array<string>;

    constructor(private noticias: NoticasService, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        //console.log("asdasf");
        this.noticias.agregar("hola");
        this.noticias.agregar("hola1");
        this.noticias.agregar("hola2");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void{
        console.dir(x);
        this.routerExtensions.navigate(['/news'], {
            transition: {
                name: "fade"
            }
        });
    }

    buscarAhora(s: string){
        this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);
    }

}
