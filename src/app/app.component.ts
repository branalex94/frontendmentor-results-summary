import { Component } from '@angular/core';
import data from '../project-initial-files/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Frontendmentor Result Summary';

  private _colorBgClasses: { [key: string]: string } = {
    'light-red': 'bg-light-red-bg',
    'light-yellow': 'bg-light-yellow-bg',
    'light-green': 'bg-light-green-bg',
    'light-blue': 'bg-light-blue-bg',
  };

  private _colortextClasses: { [key: string]: string } = {
    'light-red': 'color-red',
    'light-yellow': 'color-yellow',
    'light-green': 'color-green',
    'light-blue': 'color-dark-blue',
  };

  public data: {
    category: string;
    score: number;
    icon: string;
    color: string;
  }[] = data;

  getBoxClass(colorName: string) {
    return this._colorBgClasses[colorName]
      ? this._colorBgClasses[colorName]
      : '';
  }
  getTextClass(colorName: string) {
    return this._colortextClasses[colorName]
      ? this._colortextClasses[colorName]
      : '';
  }
}
