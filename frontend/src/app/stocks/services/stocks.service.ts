import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { io, Socket } from "socket.io-client";

@Injectable()
export class StocksService {
  private _socket: Socket;

  constructor() {
    this._socket= io("http://localhost:9090", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "my-custom-header-value"
      }
    });
  }

  getAppleStockValues(): Observable<any> {
    return this._triggerSocketIoEvent("appleStocks");
  }

  getGoogleStockValues(): Observable<any> {
    return this._triggerSocketIoEvent("googleStocks");
  }

  getMicrosoftStockValues(): Observable<any> {
    return this._triggerSocketIoEvent("microsoftStocks");
  }

  private _triggerSocketIoEvent(evt: string) {
    console.log('triggering event: ', evt);
    return new Observable((observer: Observer<object>) => {
      this._socket.on(evt, (stocks: any) => {
        observer.next(stocks);
        observer.error('');
        observer.complete();
      });
    });
  }
}
