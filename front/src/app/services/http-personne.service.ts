import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Personne } from "../modele/Personne";

@Injectable()
export class HttpPersonneService {
  readonly endPoint = "http://localhost:8080";
  readonly httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private httpClient: HttpClient) {}

  public getPersonnes(): Observable<Personne[]> {
    return this.httpClient
      .get(`${this.endPoint}/personnes`)
      .map(retour => retour["_embedded"]["personnes"]);
  }

  public addPersonne(personne: Personne) {
    return this.httpClient.post<Personne>(
      `${this.endPoint}/personnes`,
      personne,
      this.httpOptions
    );
  }
}
