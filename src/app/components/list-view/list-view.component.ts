import { Component } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  stations =  [1, 2 ,3 ,3, 4, 5, 6]
}
