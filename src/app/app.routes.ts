
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { RegisterPage } from './component/register-page/register-page';
import { JatraTicket } from './component/book-ticket/book-ticket';
import { UpcommingJatra } from './component/upcomming-jatra/upcomming-jatra';
import { About } from './component/about/about';
import { Conctact } from './component/conctact/conctact';
import { Todayshow } from './component/todayshow/todayshow';
import { SeatSection } from './component/seat-section/seat-section';


export const routes: Routes = [
    {
        path: '',
        component: Home,

    },
      { path:'register',component:RegisterPage},
      {path:'book-ticket',component:JatraTicket},
      {path: 'today-show',component:Todayshow},
      {path:'upcomming',component:UpcommingJatra},
      {path:'about',component:About},
      {path:'contact',component:Conctact},
      {path:'seat-section',component:SeatSection},

    { path: '**', redirectTo: '' }
];

