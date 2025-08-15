
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { RegisterPage } from './component/register-page/register-page';
import { JatraTicket } from './component/book-ticket/book-ticket';
import { UpcommingJatra } from './component/upcomming-jatra/upcomming-jatra';
import { OurMission } from './component/our-mission/our-mission';
import { Conctact } from './component/conctact/conctact';
import { Todayshow } from './component/todayshow/todayshow';
import { Payment } from './component/payment/payment';



export const routes: Routes = [
    {
        path: '',
        component: Home,

    },
      {path:'register',component:RegisterPage},
      {path:'book-ticket',component:JatraTicket},
      {path: 'today-show',component:Todayshow},
      {path:'upcomming',component:UpcommingJatra},
      {path:'our-mission',component:OurMission},
      {path:'contact',component:Conctact},
      {path:'payment',component:Payment},
    { path: '**', redirectTo: '' },
];

