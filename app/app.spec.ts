import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';

describe('App Component Tests', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ AppComponent ],
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance;
  });

  it('appcomponent_shouldisplay_originaltitle', () => {
    fixture.detectChanges();
    expect(comp.header).toEqual('Angular2 has initialized correctly');
  });
});