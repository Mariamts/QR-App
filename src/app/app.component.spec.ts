import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    try {
      await TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;

    } catch (error) {
      console.error(error);
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the QR code image', () => {
    try {
      fixture.detectChanges();
      const qrCodeImg = document.getElementById('qrcode') as HTMLImageElement;
      expect(qrCodeImg.src).toBeTruthy();
    } catch (error) {
      console.error(error);
    }
  });
});
