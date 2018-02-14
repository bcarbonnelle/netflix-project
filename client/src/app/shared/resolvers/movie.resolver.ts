import {Injectable} from '@angular/core'
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router'
import { Movie } from '../models/movieModel';

@Injectable()
export class MovieResolver implements Resolve<Movie>{
    constructor(){}

    resolve(route:ActivatedRouteSnapshot):Promise<any>{
        const catalog = JSON.parse(sessionStorage.getItem('catalog'));
        
        const movie = catalog.filter(function (n){
            return n.id== route.params.id;
        });
        console.log(movie[0])
        return movie[0];
    }
}
