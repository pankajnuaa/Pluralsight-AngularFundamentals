import { TestBed, async } from '@angular/core/testing';
import { EventAppComponent } from './EventsApp.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-fundamental'`, () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-fundamental');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-fundamental!');
  });
});
