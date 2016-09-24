import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  login(username, password){
    this.isLoggedIn = true;
    // really call remote service
  }

  logout(){
    this.isLoggedIn = false;
  }
}
