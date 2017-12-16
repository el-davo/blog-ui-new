import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {routerReducer as router} from '@angular-redux/router';
import {combineReducers} from 'redux';
import {navReducer as nav} from './nav/nav.reducer';
import {userReducer as user} from './user/user.reducer';
import {landingReducer as landing} from './landing/landing.reducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router,
    nav,
    user,
    landing
  })
);
