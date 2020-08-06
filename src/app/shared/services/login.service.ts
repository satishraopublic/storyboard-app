import { Injectable } from '@angular/core';
import { UserStateService } from './user-state.service';
import { UserInfo } from '../types/user-info';
import { IUserInfo } from '../types/iuser-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userState: UserStateService) { 

  }

  login(userName:string, password:string): IUserInfo{
    if(userName == 'srao'){
      if(password == 'password'){
        var u = new UserInfo('Satish','Rao','srao',true);
        this.userState.SetUser(u);
        return u;
      }
    }
    else if(userName == 'manager'){
      if(password == 'password'){
        var u = new UserInfo('Manager','','manager',true);
        this.userState.SetUser(u);
        return u;
      }
    }
    return null;
  }

}
