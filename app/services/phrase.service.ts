/**
 * Created by smartit-11 on 13.06.17.
 */

import { Injectable } from '@angular/core';

import { Phrase } from './data/phrase'

let phrases = [
    new Phrase(1, "Hello World 1", "English 1"),
    new Phrase(2, "Hello World 2", "English 2"),
    new Phrase(3, "Hello World 3", "English 3"),
    new Phrase(4, "Hello World 4", "English 4")
];

let pharasesPromise = Promise.resolve(phrases);

@Injectable()
export class PhraseService {

    getAll(): Promise<Phrase[]>{
        return pharasesPromise;
    }

    getPhrase(id: number): Promise<Phrase> {
        return pharasesPromise
                 .then(phrases =>
                    phrases.find(x => x.id == id));
    }
}