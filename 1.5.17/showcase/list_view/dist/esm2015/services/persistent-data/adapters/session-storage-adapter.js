/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CookieAdapter } from './cookie-adapter';
export class SessionStorageAdapter {
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        return sessionStorage.getItem(key);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        sessionStorage.setItem(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        sessionStorage.removeItem(key);
    }
    /**
     * @return {?}
     */
    clear() {
        sessionStorage.clear();
    }
    /**
     * @return {?}
     */
    getSupported() {
        // if local storage variable does not exist fall back to cookies
        if (!sessionStorage) {
            return new CookieAdapter();
        }
        // try to make a test save to local storage to see if there are any exceptions
        try {
            sessionStorage.setItem('ux-persistent-data-service', 'ux-persistent-data-service');
            sessionStorage.removeItem('ux-persistent-data-service');
            return this;
        }
        catch (/** @type {?} */ err) {
            return new CookieAdapter();
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsic2VydmljZXMvcGVyc2lzdGVudC1kYXRhL2FkYXB0ZXJzL3Nlc3Npb24tc3RvcmFnZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsTUFBTTs7Ozs7SUFFRixPQUFPLENBQUMsR0FBVztRQUNmLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3RDOzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDOUIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDbEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQzs7OztJQUVELEtBQUs7UUFDRCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCxZQUFZOztRQUdSLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUM5Qjs7UUFHRCxJQUFJLENBQUM7WUFDRCxjQUFjLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLDRCQUE0QixDQUFDLENBQUM7WUFDbkYsY0FBYyxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDZjtRQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFBLEdBQUcsRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUM7U0FDOUI7S0FDSjtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZUFkYXB0ZXIgfSBmcm9tICcuL3N0b3JhZ2UtYWRhcHRlcic7XG5pbXBvcnQgeyBDb29raWVBZGFwdGVyIH0gZnJvbSAnLi9jb29raWUtYWRhcHRlcic7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIgaW1wbGVtZW50cyBTdG9yYWdlQWRhcHRlciB7XG5cbiAgICBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZ2V0U3VwcG9ydGVkKCk6IFN0b3JhZ2VBZGFwdGVyIHtcblxuICAgICAgICAvLyBpZiBsb2NhbCBzdG9yYWdlIHZhcmlhYmxlIGRvZXMgbm90IGV4aXN0IGZhbGwgYmFjayB0byBjb29raWVzXG4gICAgICAgIGlmICghc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29va2llQWRhcHRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJ5IHRvIG1ha2UgYSB0ZXN0IHNhdmUgdG8gbG9jYWwgc3RvcmFnZSB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSBleGNlcHRpb25zXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1eC1wZXJzaXN0ZW50LWRhdGEtc2VydmljZScsICd1eC1wZXJzaXN0ZW50LWRhdGEtc2VydmljZScpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXgtcGVyc2lzdGVudC1kYXRhLXNlcnZpY2UnKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb29raWVBZGFwdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=