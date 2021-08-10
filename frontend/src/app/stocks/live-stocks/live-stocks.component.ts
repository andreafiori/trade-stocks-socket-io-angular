import { Component, OnDestroy, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'live-stocks',
  templateUrl: './live-stocks.component.html',
  styleUrls: ['./live-stocks.component.css']
})
export class LiveStocksComponent implements OnInit {

  title: string = "Live Stocks of Apple, Google and Microsoft!";

  appleStockValue: number = 0;
  googleStockValue: number = 0;
  microsoftStockValue: number = 0;

  constructor(private _stockService: StocksService) {}

  ngOnInit(): void {
    this._stockService.getAppleStockValues().subscribe(
      appleStock => { console.log('Apple stocks subscribe'); this.appleStockValue = appleStock },
      err => console.log(err)
    );

    this._stockService.getGoogleStockValues().subscribe(
      googleStockValue => this.googleStockValue = googleStockValue,
      err => console.log(err)
    );

    this._stockService.getMicrosoftStockValues().subscribe(
      microsoftStock => this.microsoftStockValue = microsoftStock,
      err => console.log(err)
    );
  }

}
