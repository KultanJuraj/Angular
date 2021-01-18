import { Injectable } from '@angular/core';
import { Item } from './item';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 
    constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
    private log(message: string) {
      this.messageService.add(`ItemService: ${message}`);
    }
  
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => this.messageService.log('fetched items')),
        catchError(this.messageService.handleError<Item[]>('getItems', []))
      );
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.messageService.log(`fetched item id=${id}`)),
      catchError(this.messageService.handleError<Item>(`getItem id=${id}`))
    );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.messageService.log(`found items matching "${term}"`) :
         this.messageService.log(`no items matching "${term}"`)),
      catchError(this.messageService.handleError<Item[]>('searchItems', []))
    );
  }
  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => this.log(`added item w/ id=${newItem.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  }