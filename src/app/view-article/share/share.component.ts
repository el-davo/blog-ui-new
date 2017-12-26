import {Component} from '@angular/core';
import {ShareButtons} from '@ngx-share/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  constructor(public share: ShareButtons) {
  }

}
