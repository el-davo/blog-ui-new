import {navReducer as nav} from './nav/nav.reducer';
import {userReducer as user} from './user/user.reducer';
import {landingReducer as landing} from './landing/landing.reducer';
import {sideNavReducer as sideNav} from './side-nav/side-nav.reducer';
import {NavState} from './nav/nav.state';
import {UserState} from './user/user.state';
import {LandingState} from './landing/landing.state';
import {SideNavState} from './side-nav/side-nav.state';

export interface AppState {
    nav: NavState;
    user: UserState;
    landing: LandingState;
    sideNav: SideNavState;
}

export function getRootReducer() {
    return {
        nav,
        user,
        landing,
        sideNav
    };
}
