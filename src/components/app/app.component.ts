import { AppCtrl } from './app.ctrl';

export const AppComponent: angular.IComponentOptions  = {
    template: `
        <md-content layout-padding>
            <mc-dates date-from="ctrl.date1" date-to="ctrl.date2" mc-change="ctrl.changeDates(from, to)"></mc-dates>

            <md-divider></md-divider>

            <div layout="column">
                <div layout="row">
                    <div layout="column">
                        <md-input-container>
                            <label>Дата 1</label>
                            <input ng-model="ctrl.date1" ng-model-options="{ updateOn: 'blur'}">
                        </md-input-container>
                    </div>
                    <div layout="column" flex-offset="10">
                        <md-input-container>
                            <label>Дата 2</label>
                            <input ng-model="ctrl.date2" ng-model-options="{ updateOn: 'blur'}">
                        </md-input-container>
                    </div>
                </div>
            </div> 
        </md-content>
    `,

    controller: AppCtrl,
    controllerAs: "ctrl"
  };