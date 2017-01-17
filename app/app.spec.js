"use strict";
var app_component_1 = require("./app.component");
describe('App Component Tests', function () {
    var comp;
    var fixture;
    beforeEach(function () {
        comp = new app_component_1.AppComponent();
        comp.ngOnInit();
    });
    it('appcomponent_shouldisplay_originaltitle', function () {
        expect(comp.header).toEqual('Angular2 has initialized correctly');
    });
});
//# sourceMappingURL=app.spec.js.map