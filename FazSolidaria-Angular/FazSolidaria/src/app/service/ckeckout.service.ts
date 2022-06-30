import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root',
})
export class CkeckoutService {
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  constructor(private http: HttpClient) {}

  placeOrder(purchase: Purchase): Observable<any> {
    return this.http.post<GetResponsePurchase>(
      'http://localhost:8080/api/checkout/purchase', purchase,
      {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    );
  }
}

interface GetResponsePurchase {
  orderTrackingNumber: string;
}
