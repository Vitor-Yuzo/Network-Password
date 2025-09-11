import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'back-end';

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { email, password });
  }
  getPasswords(): Observable<any[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token não encontrado');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.baseUrl}/dashboard`, { headers });
  }
}
