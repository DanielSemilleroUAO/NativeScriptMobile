import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "SearchForm",
    templateUrl: "./search-form.component.html"
})
export class SearchFormComponent {

    textFieldValue: string = "";
    @Output() search: EventEmitter<String> = new EventEmitter();

    onButtonTap(): void{
        console.log(this.textFieldValue);
        if(this.textFieldValue.length > 2){
            this.search.emit(this.textFieldValue);
        }
    }

}