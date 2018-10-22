import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { TeamMember } from './team-member.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule }    from '@angular/common/http';
import { Http, Headers, URLSearchParams } from '@angular/http';

const BASE_URL = 'http://localhost:3000/team-members';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {

  constructor(private http: Http,) { }

  all() {
    return this.http.get(BASE_URL)
      .pipe();
  }
}
