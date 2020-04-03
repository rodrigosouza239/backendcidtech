import { Component, OnInit } from '@angular/core';
import { faPowerOff,faUserCircle,faBarcode,faShareSquare,faUserLock,faSignal,faUserEdit,faComment,faEdit,faShareAlt  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  faPowerOff = faPowerOff;
  faUserCircle = faUserCircle;
  faBarcode = faBarcode;
  faShareAlt = faShareAlt;
  faShareSquare = faShareSquare ;
  faUserLock  = faUserLock ;
  faSignal = faSignal;
  faUserEdit  = faUserEdit;
  faComment  = faComment ;
  faEdit = faEdit;

  constructor() { }

  ngOnInit() {
  }

}
