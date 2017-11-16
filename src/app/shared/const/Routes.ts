import { LoginComponent, SettingComponent } from '../../component/userinfo';
import { HomeComponent } from '../../component/home';
export const Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'Setting',
        component: SettingComponent
    }
];
