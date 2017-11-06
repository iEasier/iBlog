import { LoginComponent } from '../component/login';
import { HomeComponent } from '../component/home';
import { ShowPhotosComponent } from '../component/show-photos';
import { WriteNoteComponent } from '../component/write-note';
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
        path: 'WriteNote',
        component: WriteNoteComponent
    },
    {
        path: 'Photos',
        component: ShowPhotosComponent
    }
];
