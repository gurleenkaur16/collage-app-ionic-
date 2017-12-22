import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {CanvasPage} from "../canvas/canvas";
import {PicturePage} from "../picture/picture";
import {LoginPage} from "../login/login";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CanvasPage;
  tab5Root = LoginPage;

  constructor() {

  }
}
