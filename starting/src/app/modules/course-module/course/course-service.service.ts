import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppConfig, APP_TOKEN } from 'src/app/config';
let count: number = 0;
// The decorator tells angular that this class is a service and able to be injected to other services, components. But it doesn't tell angular how to instantiate the service because of lacking metadata
// CUSTOM DIRECTIVES
// CUSTOM     // CUSTOM DIRECTIVES

// CUSTOM DIRECTIVES
@Injectable()
export class CourseServiceService {
  private ID: number;
  constructor(
    private readonly http: HttpClient,
    @Inject(APP_TOKEN) private readonly config: AppConfig
  ) {
    count++;
    this.ID = count;
    console.log('this.ID', this.ID);
  }

  loadPosts<T>(path: string, params: any): Observable<T> {
    const pars = params || {};
    return this.http.get<T>(`${this.config.apiUrl}${path}`, {
      params: pars,
      observe: 'body',
    });
  }
}
