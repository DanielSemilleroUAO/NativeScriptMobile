import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as Toast from "nativescript-toasts";

@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    doLater(fn) { setTimeout(fn, 1000); }

    ngOnInit(): void {
        // Init your component properties here.
        const toastOptions : Toast.ToastOptions = {
            text: "Hello World",
            duration: Toast.DURATION.SHORT
        };

        this.doLater(() => Toast.show(toastOptions));

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
