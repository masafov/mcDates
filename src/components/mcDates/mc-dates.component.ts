import { mcDatesCtrl } from './mc-dates.ctrl';

export const mcDatesComponent = {
    template: `
        <div layout="column">
            <div layout="row">
                <div layout="column">
                    <label>С</label>
                    <md-datepicker  ng-model="ctrl.from" md-max-date="ctrl.maxDate" md-hide-icons="calendar" ng-change="ctrl.dateChanged()"></md-datepicker>
                </div>
                <div layout="column" flex-offset="10">
                    <label>По</label>
                    <md-datepicker  ng-model="ctrl.to" md-min-date="ctrl.minDate" md-hide-icons="calendar" ng-change="ctrl.dateChanged()"></md-datepicker>
                </div>
            </div>

            <div layout="row">
                <md-button ng-repeat="opt in ctrl.options" ng-click="opt.fn()">{{opt.text}}</md-button>
            </div>            
        </div>
    `,

    bindings: {
        dateFrom: "=",
        dateTo: "=",
        mcChange: "&"
    },

    controller: mcDatesCtrl,
    controllerAs: "ctrl"
}