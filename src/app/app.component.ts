import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'facebook-qr-app';
  ngOnInit() {
    const url = 'https://www.facebook.com';
    QRCode.toDataURL(url, (err, qrCodeUrl) => {
      if (err) {
        console.error(err);
      } else {
        const qrCodeImg = document.getElementById('qrcode');
        qrCodeImg!.setAttribute('src', qrCodeUrl);
      }
    });
  }
}
