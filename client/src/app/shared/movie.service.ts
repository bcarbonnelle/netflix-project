import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL ='http://localhost:8069/api/movies';
const HEADER = {headers: new Headers({'content-type':'application.json'})};

@Injectable()
export class MovieService {

  constructor(public http:HttpClient) { }
    getAll(){
        return this.http.get(BASE_URL).toPromise();
    }
    getNumberOfMovies(){
        return this.http.get(BASE_URL + '/count').toPromise();
    }
}
