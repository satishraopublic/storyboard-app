import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../services/user-state.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  displayName: string=null;
  IsLoggedIn: boolean=false;
  constructor(private userStateService: UserStateService, private router: Router, private loginService: LoginService) { 
    this.checkForLogin();
  }

  
  ngOnInit(): void {
    this.loginService.getEmitter().subscribe((c)=>{
      this.checkForLogin();
    })
  }

  linkClicked():void{
    if(this.userStateService.IsUserLogged()){
      this.router.navigate(['profile']);
    }
    else{
      this.router.navigate(['login']);
    }
  }

  signout():void{
    this.loginService.signOut();
    this.router.navigate(['login']);
  }

  private checkForLogin(): void{
    if(this.userStateService.IsUserLogged()){
      this.displayName = `${this.userStateService.GetUser().firstName} ${this.userStateService.GetUser().lastName}`;
      this.IsLoggedIn = true;
    }
    else{
      this.displayName = 'Sign In';
      this.IsLoggedIn = false;
    }
  }

}
