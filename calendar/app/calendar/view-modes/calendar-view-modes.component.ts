import { OptionsExampleBase } from "../../options-example-base";
import { Component, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { OptionsService } from "../../navigation/options/options.service";
import { CalendarViewMode } from "nativescript-ui-calendar";
import * as applicationModule from "tns-core-modules/application";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-view-modes",
    templateUrl: "calendar-view-modes.component.html"
})
@Injectable()
export class CalendarViewModesComponent extends OptionsExampleBase {
    private _optionsParamName: string;
    private _viewMode: CalendarViewMode;

    constructor(private _page: Page,
        private _optionsService: OptionsService, private _router: Router) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "eventsViewMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 1, paramName: this._optionsParamName, items: ["Week", "Month", "Month names", "Year", "Day"] };
        }
        this._viewMode = CalendarViewMode.Month;
    }

    get viewMode() {
        return this._viewMode;
    }

    onWeekTap() {
        this._viewMode = CalendarViewMode.Week;
    }

    onMonthTap() {
        this._viewMode = CalendarViewMode.Month;
    }

    onMonthNamesTap() {
        this._viewMode = CalendarViewMode.MonthNames;
    }

    onYearTap() {
        this._viewMode = CalendarViewMode.Year;
    }

    onDayTap() {
        this._viewMode = CalendarViewMode.Day;
    }

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case 0:
                        this.onWeekTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case 1:
                        this.onMonthTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case 2:
                        this.onMonthNamesTap();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case 3:
                        this.onYearTap();
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    case 4:
                        this.onDayTap();
                        this.navigationParameters.selectedIndex = 4;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}