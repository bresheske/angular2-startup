import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';

describe('App Component Tests', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    comp = new AppComponent();
    comp.ngOnInit();
  });

  it('appcomponent_shouldisplay_originaltitle', () => {
    expect(comp.header).toEqual('Angular2 has initialized correctly');
  });
});