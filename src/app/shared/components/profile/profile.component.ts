import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../services/user-state.service';
import { IUserInfo } from '../../types/iuser-info';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: IUserInfo=null;
  adminType: string = null;
  constructor(private userStateService: UserStateService) { 
    if(userStateService.IsUserLogged()){
      this.userProfile = userStateService.GetUser();
      if(this.userProfile.isAdmin){
        this.adminType = 'Administrator';
      }
      else{
        this.adminType = 'User';
      }
    }
  }

  ngOnInit(): void {
  }



}
