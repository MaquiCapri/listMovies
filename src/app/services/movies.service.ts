import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interface/apiResponse';
import { Movie } from '../interface/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
//key bb6f8520
 API_URL: string = 'http://www.omdbapi.com/?apikey=bb6f8520';
  constructor(private http: HttpClient) { }

   getMovies(searchTerm: string): Observable<Movie[]>{
     return this.http.get<ApiResponse>(this.API_URL + '&s=' + searchTerm).pipe(
      map(response => {
        return response.Search;
      })
     )

     };
   }

