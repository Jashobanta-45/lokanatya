
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { RegisterPage } from './component/register-page/register-page';
import { JatraTicket } from './component/book-ticket/book-ticket';
import { UpcommingShow } from './component/upcomming-show/upcomming-show';
import { OurMission } from './component/our-mission/our-mission';
import { Conctact } from './component/conctact/conctact';
import { Todayshow } from './component/todayshow/todayshow';
import { AllCamps } from './component/all-camps/all-camps';
import { Payment } from './component/payment/payment';



export const routes: Routes = [
    {
        path: '',
        component: Home,

    },
      {path:'register',component:RegisterPage},
      {path:'book-ticket',component:JatraTicket},
      {path: 'today-show',component:Todayshow},
      {path:'upcomming-show',component:UpcommingShow},
      {path:'all-camps',component:AllCamps},
      {path:'our-mission',component:OurMission},
      {path:'contact',component:Conctact},
      {path:'payment',component:Payment},
    { path: '**', redirectTo: '' },
];

