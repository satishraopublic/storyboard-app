import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  displayName: string=null;
  constructor(private userStateService: UserStateService) { 
    if(userStateService.IsUserLogged()){
      this.displayName = `${userStateService.GetUser().firstName} ${userStateService.GetUser().lastName}`;
    }
    else{
      this.displayName = 'Sign In';
    }
  }

  ngOnInit(): void {

  }

}
