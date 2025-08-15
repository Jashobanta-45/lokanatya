
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { RegisterPage } from './component/register-page/register-page';
import { JatraTicket } from './component/jatra-ticket/jatra-ticket';
import { UpcommingJatra } from './component/upcomming-jatra/upcomming-jatra';
import { About } from './component/about/about';
import { Conctact } from './component/conctact/conctact';


export const routes: Routes = [
    {
        path: '',
        component: Home,

    },
      { path:'register',component:RegisterPage},
      {path:'jatra-ticket',component:JatraTicket},
      {path:'upcomming',component:UpcommingJatra},
      {path:'about',component:About},
      {path:'contact',component:Conctact},

    { path: '**', redirectTo: '' }
];

