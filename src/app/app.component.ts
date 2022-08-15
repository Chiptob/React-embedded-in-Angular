import { Component } from '@angular/core';
import { CustomReactWrapper } from 'src/components/custom-react/custom-react-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter = 0;

}
