import moment = require("moment");

export class mcDatesCtrl {

    DATE_FORMAT: string = "YYYY-MM-DD";
    from: Date;
    to: Date;
    minDate: Date;
    maxDate: Date;
    options: Array<any>;
    mcChange: (params) => any;

    constructor() {
        this.options = [
            {
                text: "Вчера",
                fn: () => {
                    let yesterday = moment(new Date()).add(-1, 'days');
                    this.setOption(yesterday, yesterday);
                }
            },
            {
                text: "Сегодня",
                fn: () => {
                    let today = moment(new Date());
                    this.dateFrom = this.format(today);
                    this.dateTo = this.format(today);
                    this.dateChanged();
                }
            },
            {
                text: "2 недели",
                fn: () => {
                    let two_weeks = moment(new Date()).add(-14, 'days');
                    let today = moment(new Date());
                    this.dateFrom = this.format(two_weeks);
                    this.dateTo = this.format(today);
                    this.dateChanged();
                }
            },
            {
                text: "Месяц",
                fn: () => {
                    let month = moment(new Date()).add(-30, 'days');
                    let today = moment(new Date());
                    this.dateFrom = this.format(month);
                    this.dateTo = this.format(today);
                    this.dateChanged();
                }
            },
            {
                text: "Все",
                fn: () => {
                    this.setOption(null, null);
                }
            }
        ]
    }

    get dateFrom(): string {
        return this.format(this.from);
    }

    set dateFrom(value: string) {
        this.from = this.parse(value);
    }

    get dateTo(): string {
        return this.format(this.to);
    }

    set dateTo(value: string) {
        this.to = this.parse(value);

    }

    dateChanged() {
        this.minDate = this.from;
        this.maxDate = this.to;
        this.mcChange({ from: this.format(this.from), to: this.format(this.to) });
    }

    format(value) {
        return value ? moment(value).format('YYYY-MM-DD') : null;
    }

    parse(value): Date {
        if (!value) {
            return null;
        }
        let date = moment(value);
        return date.isValid() ? date.toDate() : null;
    }

    setOption(newFrom, newTo) {
        if(this.isDifferent(newFrom, newTo)){
            this.dateFrom = this.format(newFrom);
            this.dateTo = this.format(newTo);
            this.dateChanged();
        }
    }

    isDifferent(newFrom, newTo): boolean {
        if(!newFrom && !this.from && !newTo && !this.to) return false;
        return (!moment(newFrom).isSame(this.from, "day") || !moment(newTo).isSame(this.to, "day"));
    }

}
