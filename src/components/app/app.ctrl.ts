import moment = require("moment");

export class AppCtrl {
    date1: string;
    date2: string;

    changeDates(from, to) {
        console.log(`Новый диапозон с ${from} по ${to}`);
    }

    test2Way() {
        this.date1 = moment(new Date()).format("YYYY-MM-DD");
    }
}