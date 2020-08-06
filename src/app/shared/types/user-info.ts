import { IUserInfo } from './iuser-info';

export class UserInfo implements IUserInfo{
    firstName: string;
    lastName: string;
    userName: string;
    isAdmin: boolean;
    constructor(fname:string, lname:string, uname:string, isadmin:boolean){
        this.firstName = fname;
        this.lastName = lname;
        this.userName = uname;
        this.isAdmin = isadmin;
    }
}
