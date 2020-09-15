import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private ITEMS = 'Items';

  constructor(private httpClient: HttpClient) { }

  fetchCatalog(): Observable<any[]> {
    return this.httpClient.get(environment.firebaseUrl + this.ITEMS + '.json').pipe(
      map((res) => {
        let finalResponse = [];
        if (res && Object.keys(res).length) {
          Object.keys(res).forEach((item) => {
            finalResponse.push({
              id: item,
              ...res[item]
            });
          });
        }
        return finalResponse;
      })
    );
  }

  fetchCatalogItemById(catalogItemId: string): Observable<any> {
    return this.httpClient.get(environment.firebaseUrl + this.ITEMS + '/' + catalogItemId + '.json');
  }

}
