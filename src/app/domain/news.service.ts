import { Injectable } from '@angular/core';

@Injectable()
export class NoticasService{
    private noticias: Array<string> = [];

    agregar(s: string){
        this.noticias.push(s);
    }

    buscar(){
        return this.noticias;
    }

}