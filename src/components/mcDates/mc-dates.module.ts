import * as angular from 'angular';
import * as moment from 'moment';
import { mcDatesComponent } from './mc-dates.component';

export const mcDatesModule = angular.module('mcDates', ['ngMaterial'])
    .config(["$mdDateLocaleProvider", ($mdDateLocaleProvider) => {
        $mdDateLocaleProvider.formatDate = (date) => {
            return date ? moment(date).format('YYYY-MM-DD') : null;
        };
    }])
    .component('mcDates', mcDatesComponent).name;