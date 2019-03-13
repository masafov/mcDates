import * as angular from 'angular';
import { AppComponent } from './components/app/app.component';
import { mcDatesModule } from './components/mcDates/mc-dates.module';

export let app = angular.module('app',  [mcDatesModule])
    .component('app', AppComponent);
