import { Component, Input } from "@angular/core";
import { ViewDetails } from '../types';

@Component({
  selector: 'abc-view-breakdown',
  template: '<pre>{{views | json}}</pre>'
})
export class ViewBreakdownComponent {
  @Input() views: ViewDetails[];
}