import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  
  public log(message: string) {
    this.add(`HeroService: ${message}`);
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}