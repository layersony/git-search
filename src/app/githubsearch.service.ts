import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Userdetail } from './userdetail';
import { Repos } from './repos';


@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  //blueprint of classes for 

  userdetail : Userdetail
  repos : Repos

  constructor(private http:HttpClient) { 
    this.userdetail = new Userdetail('', '', '', ''); // for userdetails
    this.repos = new Repos('', '', new Date()); // for repos
  }

  // RECEIVING THE DATA

  getUserDetails(user:string){

    interface ApiResponse {
      login:string,
      avatar_url:string,
      repos_url:string,
      name:string,
    }

    let promise = new Promise((resolve, reject) =>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ user +'?access_token=' + environment.apiKey).toPromise().then(response => {
        this.userdetail.login = response.login,
        this.userdetail.avatar_url = response.avatar_url,
        this.userdetail.repos_url = response.repos_url,
        this.userdetail.name = response.name

        resolve("it's a Success")
      })
    })
    // console.log(this.userdetail)
    return promise

  }

}
