import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gananatya';
}
