/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FacetBaseComponent } from '../base/facet-base/facet-base.component';
var FacetCheckListComponent = (function (_super) {
    tslib_1.__extends(FacetCheckListComponent, _super);
    function FacetCheckListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facets = [];
        _this.scrollbar = true;
        _this.expanded = true;
        return _this;
    }
    FacetCheckListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-facet-check-list',
                    template: "<ux-facet-header [header]=\"header\" [(expanded)]=\"expanded\"></ux-facet-header>\n\n<!-- Create a container which will show when section is expanded -->\n<div class=\"facet-check-list-container\" [class.facet-check-list-scrollbar]=\"scrollbar\" *ngIf=\"expanded\">\n\n    <!-- Iterate through each possible facet -->\n    <div class=\"facet-check-list-item\" *ngFor=\"let facet of facets\" [class.facet-active]=\"isFacetSelected(facet)\" tabindex=\"0\"\n        (click)=\"toggleFacetSelection(facet)\" (keyup.enter)=\"toggleFacetSelection(facet)\" [class.disabled]=\"facet.disabled\">\n\n        <!-- Show check icon to indicate the state -->\n        <span class=\"facet-check-list-item-check\">\n            <span class=\"hpe-icon hpe-active\"></span>\n        </span>\n\n        <!-- Display the title -->\n        <span class=\"facet-check-list-item-title\">{{ facet.title }}</span>\n\n        <!-- Display the count if specified -->\n        <span class=\"facet-check-list-item-count\" *ngIf=\"facet.count !== undefined\">({{ facet.count }})</span>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    FacetCheckListComponent.ctorParameters = function () { return []; };
    FacetCheckListComponent.propDecorators = {
        "facets": [{ type: Input },],
        "header": [{ type: Input },],
        "scrollbar": [{ type: Input },],
        "expanded": [{ type: Input },],
    };
    return FacetCheckListComponent;
}(FacetBaseComponent));
export { FacetCheckListComponent };
function FacetCheckListComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetCheckListComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetCheckListComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FacetCheckListComponent.propDecorators;
    /** @type {?} */
    FacetCheckListComponent.prototype.facets;
    /** @type {?} */
    FacetCheckListComponent.prototype.header;
    /** @type {?} */
    FacetCheckListComponent.prototype.scrollbar;
    /** @type {?} */
    FacetCheckListComponent.prototype.expanded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2stbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mYWNldHMvZmFjZXQtY2hlY2stbGlzdC9mYWNldC1jaGVjay1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztJQTJCaEMsbURBQWtCOzs7dUJBRWhDLEVBQUU7MEJBRUMsSUFBSTt5QkFDTCxJQUFJOzs7O2dCQTdCcEMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxvakNBb0JQO2lCQUNOOzs7OzsyQkFHSSxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOztrQ0FqQ1Y7RUE0QjZDLGtCQUFrQjtTQUFsRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNldEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2ZhY2V0LWJhc2UvZmFjZXQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICcuLi9tb2RlbHMvZmFjZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3V4LWZhY2V0LWNoZWNrLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgPHV4LWZhY2V0LWhlYWRlciBbaGVhZGVyXT1cImhlYWRlclwiIFsoZXhwYW5kZWQpXT1cImV4cGFuZGVkXCI+PC91eC1mYWNldC1oZWFkZXI+XG5cbjwhLS0gQ3JlYXRlIGEgY29udGFpbmVyIHdoaWNoIHdpbGwgc2hvdyB3aGVuIHNlY3Rpb24gaXMgZXhwYW5kZWQgLS0+XG48ZGl2IGNsYXNzPVwiZmFjZXQtY2hlY2stbGlzdC1jb250YWluZXJcIiBbY2xhc3MuZmFjZXQtY2hlY2stbGlzdC1zY3JvbGxiYXJdPVwic2Nyb2xsYmFyXCIgKm5nSWY9XCJleHBhbmRlZFwiPlxuXG4gICAgPCEtLSBJdGVyYXRlIHRocm91Z2ggZWFjaCBwb3NzaWJsZSBmYWNldCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZmFjZXQtY2hlY2stbGlzdC1pdGVtXCIgKm5nRm9yPVwibGV0IGZhY2V0IG9mIGZhY2V0c1wiIFtjbGFzcy5mYWNldC1hY3RpdmVdPVwiaXNGYWNldFNlbGVjdGVkKGZhY2V0KVwiIHRhYmluZGV4PVwiMFwiXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVGYWNldFNlbGVjdGlvbihmYWNldClcIiAoa2V5dXAuZW50ZXIpPVwidG9nZ2xlRmFjZXRTZWxlY3Rpb24oZmFjZXQpXCIgW2NsYXNzLmRpc2FibGVkXT1cImZhY2V0LmRpc2FibGVkXCI+XG5cbiAgICAgICAgPCEtLSBTaG93IGNoZWNrIGljb24gdG8gaW5kaWNhdGUgdGhlIHN0YXRlIC0tPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhY2V0LWNoZWNrLWxpc3QtaXRlbS1jaGVja1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtYWN0aXZlXCI+PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPCEtLSBEaXNwbGF5IHRoZSB0aXRsZSAtLT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldC1jaGVjay1saXN0LWl0ZW0tdGl0bGVcIj57eyBmYWNldC50aXRsZSB9fTwvc3Bhbj5cblxuICAgICAgICA8IS0tIERpc3BsYXkgdGhlIGNvdW50IGlmIHNwZWNpZmllZCAtLT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldC1jaGVjay1saXN0LWl0ZW0tY291bnRcIiAqbmdJZj1cImZhY2V0LmNvdW50ICE9PSB1bmRlZmluZWRcIj4oe3sgZmFjZXQuY291bnQgfX0pPC9zcGFuPlxuICAgIDwvZGl2PlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrTGlzdENvbXBvbmVudCBleHRlbmRzIEZhY2V0QmFzZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSBmYWNldHM6IEZhY2V0W10gPSBbXTtcbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBzY3JvbGxiYXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZTtcbn0iXX0=