/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { SidePanelService } from '../side-panel/side-panel.service';
var ItemDisplayPanelContentDirective = (function () {
    function ItemDisplayPanelContentDirective() {
    }
    ItemDisplayPanelContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxItemDisplayPanelContent]'
                },] },
    ];
    /** @nocollapse */
    ItemDisplayPanelContentDirective.ctorParameters = function () { return []; };
    return ItemDisplayPanelContentDirective;
}());
export { ItemDisplayPanelContentDirective };
function ItemDisplayPanelContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelContentDirective.ctorParameters;
}
var ItemDisplayPanelFooterDirective = (function () {
    function ItemDisplayPanelFooterDirective() {
    }
    ItemDisplayPanelFooterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxItemDisplayPanelFooter]'
                },] },
    ];
    /** @nocollapse */
    ItemDisplayPanelFooterDirective.ctorParameters = function () { return []; };
    return ItemDisplayPanelFooterDirective;
}());
export { ItemDisplayPanelFooterDirective };
function ItemDisplayPanelFooterDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelFooterDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelFooterDirective.ctorParameters;
}
var ItemDisplayPanelComponent = (function (_super) {
    tslib_1.__extends(ItemDisplayPanelComponent, _super);
    function ItemDisplayPanelComponent(service, elementRef) {
        var _this = _super.call(this, service, elementRef) || this;
        _this.boxShadow = true;
        _this.closeVisible = true;
        _this.shadow = false;
        _this.visibleChange = new EventEmitter();
        _this.animate = false;
        _this.closeOnExternalClick = true;
        return _this;
    }
    Object.defineProperty(ItemDisplayPanelComponent.prototype, "preventClose", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.closeOnExternalClick;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.closeOnExternalClick = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDisplayPanelComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this.header;
        },
        set: /**
         * @deprecated
         * Title used for adding tooltips and shouldn't be used as an input
         * instead header will be used. This is here to support backward compatibility only
         * this property should not be used.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.header = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDisplayPanelComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.open;
        },
        set: /**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            this.open = visible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ItemDisplayPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._itemDisplayPanelSubscription = this.service.open$.subscribe(function (next) {
            _this.visibleChange.emit(next);
        });
    };
    /**
     * @return {?}
     */
    ItemDisplayPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._itemDisplayPanelSubscription.unsubscribe();
    };
    ItemDisplayPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-item-display-panel',
                    template: "<div class=\"ux-side-panel-host ux-item-display-panel\"\n    [class.box-shadow]=\"boxShadow\"\n    [style.position]=\"position\"\n    [style.width]=\"hostWidth\"\n    [style.top]=\"cssTop\">\n\n    <div class=\"ux-side-panel-header\" [class.item-display-panel-shadow]=\"shadow\">\n        <h3>{{ header }}</h3>\n        <button *ngIf=\"closeVisible\" type=\"button\" class=\"btn btn-lg btn-link btn-icon button-secondary\" (click)=\"visible = false\">\n            <i class=\"hpe-icon hpe-close\"></i>\n        </button>\n    </div>\n\n    <div class=\"ux-side-panel-content\">\n        <ng-content select=\"[uxItemDisplayPanelContent]\"></ng-content>\n    </div>\n\n    <div class=\"ux-side-panel-footer\" *ngIf=\"footer\">\n        <ng-content select=\"[uxItemDisplayPanelFooter]\"></ng-content>\n    </div>\n\n</div>\n",
                    providers: [SidePanelService],
                    host: {
                        'class': 'ux-side-panel ux-item-display-panel'
                    }
                },] },
    ];
    /** @nocollapse */
    ItemDisplayPanelComponent.ctorParameters = function () { return [
        { type: SidePanelService, },
        { type: ElementRef, },
    ]; };
    ItemDisplayPanelComponent.propDecorators = {
        "header": [{ type: Input },],
        "boxShadow": [{ type: Input },],
        "closeVisible": [{ type: Input },],
        "preventClose": [{ type: Input },],
        "shadow": [{ type: Input },],
        "footer": [{ type: ContentChild, args: [ItemDisplayPanelFooterDirective,] },],
        "visibleChange": [{ type: Output },],
        "title": [{ type: Input },],
        "visible": [{ type: Input },],
    };
    return ItemDisplayPanelComponent;
}(SidePanelComponent));
export { ItemDisplayPanelComponent };
function ItemDisplayPanelComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ItemDisplayPanelComponent.propDecorators;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.header;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.boxShadow;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.closeVisible;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.shadow;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.footer;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.visibleChange;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype._itemDisplayPanelSubscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kaXNwbGF5LXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2l0ZW0tZGlzcGxheS1wYW5lbC9pdGVtLWRpc3BsYXktcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Z0JBRW5FLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2lCQUMxQzs7OzsyQ0FQRDs7U0FRYSxnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7O2dCQUU1QyxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDRCQUE0QjtpQkFDekM7Ozs7MENBWkQ7O1NBYWEsK0JBQStCOzs7Ozs7Ozs7OztJQWdDRyxxREFBa0I7SUFpRDdELG1DQUFZLE9BQXlCLEVBQUUsVUFBc0I7UUFBN0QsWUFDSSxrQkFBTSxPQUFPLEVBQUUsVUFBVSxDQUFDLFNBSTdCOzBCQWxENkIsSUFBSTs2QkFFRCxJQUFJO3VCQVdWLEtBQUs7OEJBSWlCLElBQUksWUFBWSxFQUFXO1FBK0J4RSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDOztLQUNwQztJQTlDRCxzQkFBSSxtREFBWTs7OztRQUFoQjtZQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNyQzs7Ozs7a0JBR2dCLEtBQWM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsS0FBSyxDQUFDOzs7O09BSnRDOzBCQW9CRyw0Q0FBSzs7OztRQUlUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7Ozs7Ozs7OztrQkFOUyxLQUFhO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7OzswQkFRcEIsOENBQU87Ozs7UUFJWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCOzs7OztrQkFOVyxPQUFnQjtZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7SUFnQnhCLDRDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDbkUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakMsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsNkJBQTZCLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEQ7O2dCQTlGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHV6QkFzQmI7b0JBQ0csU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLElBQUksRUFBRTt3QkFDRixPQUFPLEVBQUUscUNBQXFDO3FCQUNqRDtpQkFDSjs7OztnQkF6Q1EsZ0JBQWdCO2dCQUhpRCxVQUFVOzs7MkJBK0MvRSxLQUFLOzhCQUVMLEtBQUs7aUNBRUwsS0FBSztpQ0FNTCxLQUFLOzJCQUtMLEtBQUs7MkJBRUwsWUFBWSxTQUFDLCtCQUErQjtrQ0FFNUMsTUFBTTswQkFRTixLQUFLOzRCQVNMLEtBQUs7O29DQW5GVjtFQTZDK0Msa0JBQWtCO1NBQXBELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgU2lkZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlUGFuZWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t1eEl0ZW1EaXNwbGF5UGFuZWxDb250ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURpc3BsYXlQYW5lbENvbnRlbnREaXJlY3RpdmUgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3V4SXRlbURpc3BsYXlQYW5lbEZvb3Rlcl0nXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EaXNwbGF5UGFuZWxGb290ZXJEaXJlY3RpdmUgeyB9XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndXgtaXRlbS1kaXNwbGF5LXBhbmVsJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1eC1zaWRlLXBhbmVsLWhvc3QgdXgtaXRlbS1kaXNwbGF5LXBhbmVsXCJcbiAgICBbY2xhc3MuYm94LXNoYWRvd109XCJib3hTaGFkb3dcIlxuICAgIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXG4gICAgW3N0eWxlLndpZHRoXT1cImhvc3RXaWR0aFwiXG4gICAgW3N0eWxlLnRvcF09XCJjc3NUb3BcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJ1eC1zaWRlLXBhbmVsLWhlYWRlclwiIFtjbGFzcy5pdGVtLWRpc3BsYXktcGFuZWwtc2hhZG93XT1cInNoYWRvd1wiPlxuICAgICAgICA8aDM+e3sgaGVhZGVyIH19PC9oMz5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNsb3NlVmlzaWJsZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGcgYnRuLWxpbmsgYnRuLWljb24gYnV0dG9uLXNlY29uZGFyeVwiIChjbGljayk9XCJ2aXNpYmxlID0gZmFsc2VcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb24gaHBlLWNsb3NlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ1eC1zaWRlLXBhbmVsLWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3V4SXRlbURpc3BsYXlQYW5lbENvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInV4LXNpZGUtcGFuZWwtZm9vdGVyXCIgKm5nSWY9XCJmb290ZXJcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3V4SXRlbURpc3BsYXlQYW5lbEZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuYCxcbiAgICBwcm92aWRlcnM6IFtTaWRlUGFuZWxTZXJ2aWNlXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdjbGFzcyc6ICd1eC1zaWRlLXBhbmVsIHV4LWl0ZW0tZGlzcGxheS1wYW5lbCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EaXNwbGF5UGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTaWRlUGFuZWxDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBib3hTaGFkb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgY2xvc2VWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGdldCBwcmV2ZW50Q2xvc2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5jbG9zZU9uRXh0ZXJuYWxDbGljaztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBwcmV2ZW50Q2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZU9uRXh0ZXJuYWxDbGljayA9ICF2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzaGFkb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBDb250ZW50Q2hpbGQoSXRlbURpc3BsYXlQYW5lbEZvb3RlckRpcmVjdGl2ZSkgZm9vdGVyOiBJdGVtRGlzcGxheVBhbmVsRm9vdGVyRGlyZWN0aXZlO1xuXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogVGl0bGUgdXNlZCBmb3IgYWRkaW5nIHRvb2x0aXBzIGFuZCBzaG91bGRuJ3QgYmUgdXNlZCBhcyBhbiBpbnB1dFxuICAgICAqIGluc3RlYWQgaGVhZGVyIHdpbGwgYmUgdXNlZC4gVGhpcyBpcyBoZXJlIHRvIHN1cHBvcnQgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICogdGhpcyBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmhlYWRlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm9wZW4gPSB2aXNpYmxlO1xuICAgIH1cblxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2l0ZW1EaXNwbGF5UGFuZWxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFNpZGVQYW5lbFNlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoc2VydmljZSwgZWxlbWVudFJlZik7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VPbkV4dGVybmFsQ2xpY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9pdGVtRGlzcGxheVBhbmVsU3Vic2NyaXB0aW9uID0gdGhpcy5zZXJ2aWNlLm9wZW4kLnN1YnNjcmliZSgobmV4dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQobmV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9pdGVtRGlzcGxheVBhbmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufSJdfQ==