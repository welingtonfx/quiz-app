import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PerguntasViewModel } from './perguntas.viewmodel';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PerguntasService {
    constructor(private http: HttpClient) { }

    public obterPerguntas(): Observable<PerguntasViewModel> {
        return this.http.get<PerguntasViewModel>(`${environment.quizurl}/pergunta/obterperguntas`, ).pipe(
            map(perguntas => perguntas),
            tap(_ => console.log("ok")),
            catchError(this.handleError<PerguntasViewModel>(''))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }    
}