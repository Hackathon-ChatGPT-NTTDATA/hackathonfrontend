import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseEndpoint='http://localhost:8090/api';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-type':'application/json'});

  constructor(private http: HttpClient) { }

  public listar(): Observable<Alumno[]>{
     return this.http.get<Alumno[]>(this.baseEndpoint);

  }

  public listarpaguinas(page: string, size:string): Observable<any>{
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.http.get<any>('${this.baseEndpoint}/pagina', {params: params} );
  }


  public ver(id: number): Observable<Alumno>{
    return this.http.get<Alumno>('${this.baseEndpoint}/$ {id}');
  }

  public  crear(alumno: Alumno): Observable<Alumno>{

    return this.http.post<Alumno>(this.baseEndpoint, alumno, {headers: this.cabeceras});
  }
  public  editar(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${this.baseEndpoint}/${alumno.id}`, alumno,
    {headers: this.cabeceras});

  }
  public eliminar (id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

}
