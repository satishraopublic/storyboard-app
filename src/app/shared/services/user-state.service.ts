import { Injectable } from '@angular/core';
import { UserInfo } from '../types/user-info';
import { IUserInfo } from '../types/iuser-info';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  _user: IUserInfo=null;
  constructor() { 
    this._user = JSON.parse(localStorage.getItem('token'));
  }

  GetUser(): IUserInfo{
    return this._user;
  }

  SetUser(user: UserInfo){
    this._user = user;
    if(this._user != null){
      localStorage.setItem('token',JSON.stringify(user));
    }
    else{
      localStorage.removeItem('token');
    }
  }

  IsUserLogged(): boolean{
    return (this._user != null);
  }


}
