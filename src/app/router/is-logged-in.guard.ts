import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../root.reducer';
import {Store} from '@ngrx/store';
import {filter} from 'rxjs/operators/filter';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {take} from 'rxjs/operators/take';

@Injectable()
export class IsLoggedInGuard implements CanActivate {

  isLoggedIn$: Observable<boolean>;
  isLoggingIn$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoggedIn$ = store.select('user', 'isLoggedIn');
    this.isLoggingIn$ = store.select('user', 'isLoggingIn');
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLoggingIn$.pipe(
      filter((isLoggingIn) => isLoggingIn === false),
      take(1),
      mergeMap(() => {
        return this.isLoggedIn$.pipe(
          mergeMap(isLoggedIn => {
            if (!isLoggedIn) {
              this.router.navigate(['/']);
              return of(false);
            }

            return of(true);
          }))
      }))
  }
}
