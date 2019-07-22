import { Component, OnInit } from '@angular/core';
// import { format } from 'path';
// import { totalmem } from 'os';

@Component({
    selector: 'app-part1',
    templateUrl: './part1.component.html',
    styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {

    //initializes the book interface as well as the other variables

    private book: Book[];

    $UnitPrice: number[];
    LineTotal: number[];
    Total: number;
    count: number;

    //constructor defines the Book Object 

    constructor() {
        this.book = [
            { title: 'Absolute Java', qty: 1, price: 114.95 },
            { title: 'Pro HTML5', qty: 1, price: 27.95 },
            { title: 'Head First HTML5', qty: 1, price: 27.89 }
        ]
        console.log(this.book);
        console.log(this.book[0].title);
        this.LineTotal = [];
        this.Total = 0;
    }

    //updates the book total

    public updateTotal() {
        this.Total = 0;
        for (var i = 0; i < this.LineTotal.length; i++) {
            this.Total += this.LineTotal[i];
        }
        return this.Total;
    }
    //updates the line total

    public updateLineTotal(lineTot: number) {
        console.log(lineTot);
        this.LineTotal[lineTot] = this.book[lineTot].price * this.book[lineTot].qty;
        return this.LineTotal[lineTot];
    }

    //saves the book data in local storage
    public save() {
        window.localStorage.setItem("book", JSON.stringify(this.book));
    }

    //adds a new book 
    public addNew() {
        this.book.push({ title: 'New Book', qty: 1, price: 10.99 });
        this.updateBookCount();
    }

    //removes a book 
    public remove(index: any) {
        this.book.splice(index, 1);
        this.updateBookCount();
    }

    //updates the book count
    public updateBookCount() {
        this.count = this.book.length;
    }
    //loads data from localstorage if there is local storage 
    public dataLoad() {
        if (window.localStorage.length != 0) {
            this.book = JSON.parse(window.localStorage.getItem('book'));
        }
    }
    ngOnInit() {

        this.updateBookCount();
        this.updateTotal();
        this.dataLoad();
    }
}
//creates the interface for Books
interface Book {
    title?: string;
    qty?: number;
    price?: number;
}
