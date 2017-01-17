"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
describe('App Component Tests', function () {
    var comp;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
    });
    it('appcomponent_shouldisplay_originaltitle', function () {
        fixture.detectChanges();
        expect(comp.header).toEqual('Angular2 has initialized correctly');
    });
});
//# sourceMappingURL=app.spec.js.map