import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PasswordService {
 
  private baseUrl = 'back-end';

  constructor(private http: HttpClient) {}

    private getAuthHeaders(): HttpHeaders {
    if (typeof localStorage === 'undefined') {
      return new HttpHeaders(); // SSR fallback
    }

    const token = localStorage.getItem('Token');
    if (!token) {
      throw new Error('Token não encontrado');
    }

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getPasswords(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.baseUrl}/user/passwords`, { headers });
  }
   strongPassword(plataform: any, password: any) {
    const token = localStorage.getItem('Token'); // pega o token salvo
    if (!token) {
      throw new Error('Token não encontrado');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const body = { plataform, password };

  return this.http.post<any[]>(`${this.baseUrl}/password/create`, body, { headers });
  }
}