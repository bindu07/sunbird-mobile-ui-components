import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LibraryFilterPage} from '../../components/library-filter/library-filter';
import {GradeFilterComponent} from '../../components/grade-filter/grade-filter';
import { AppHeaderComponent } from '../../components/app-header/app-header';
import { RecentlyViewedComponent} from '../../components/recently-viewed/recently-viewed';
import { AppFooterComponent } from '../../components/app-footer/app-footer';
import { SubjectCardsComponent } from '../../components/subject-cards/subject-cards';
import { CollectionPageComponent } from '../../components/collection-page/collection-page';
import { StyleGuideComponent } from '../../components/style-guide/style-guide';
import { OfflineToastComponent } from '../../components/offline-toast/offline-toast';
import { ContentInfoComponent } from '../../components/content-info/content-info';
import { DetailCardComponent } from '../../components/detail-card/detail-card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  components = [
    {
      "name":"Application Header",
      "pageName": AppHeaderComponent
    },
    {
      "name":"Medium Panel",
      "pageName": LibraryFilterPage
    },
    {
      "name":"Grade Panel",
      "pageName": GradeFilterComponent
    },
    {
      "name":"Recently Viewed",
      "pageName": RecentlyViewedComponent
    },
    {
      "name":"Application Footer",
      "pageName": AppFooterComponent
    },
    {
      "name":"Subject Cards",
      "pageName": SubjectCardsComponent
    },
    {
      "name":"Collection Component",
      "pageName": CollectionPageComponent
    },
    {
      "name":"Offline Comp",
      "pageName": OfflineToastComponent
    },
    {
      "name":"Content Info",
      "pageName": ContentInfoComponent
    },
    {
      "name":"Details Card",
      "pageName": DetailCardComponent
    }

  ];
  constructor(public navCtrl: NavController) {

  }
  onWhenItemClick(i){
    console.log(this.components[i].pageName);
    this.navCtrl.push(this.components[i].pageName);
  }

}
