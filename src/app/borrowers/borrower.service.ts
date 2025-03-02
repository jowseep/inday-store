import { Injectable } from "@angular/core";
import { Borrower, BORROWERS } from "./borrower.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BorrowerService {
    constructor() {}

    getBorrowerList(): Observable<Borrower[]> {
        return of(BORROWERS);
    }

    getBorrowerById(id: number): Observable<Borrower | undefined> {
        return of(BORROWERS.find(borrower => borrower.id === id));
    }
}

