/**
 * Created by smartit-11 on 13.06.17.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    getData(){
        let items: string [] = [];
        for (let i = 0; i < 10; i++){
            items.push(`Item ${i}`);
        }
        return items;
    }
}