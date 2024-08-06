import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchProjectsService {

  private urlGit = environment.baseGitApiUrl;

  constructor(private _httpClient: HttpClient) { }

  getProjectsFromGit(nameUser: string): Observable<any> {
    return this._httpClient.get<any>(`${this.urlGit}/users/${nameUser}/repos?sort=updated`);
  }

  getLangugagesFromProject(url: string): Observable<any> {
    return this._httpClient.get<any>(url);
  }

}
