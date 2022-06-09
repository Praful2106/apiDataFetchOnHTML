import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import {HttpClient } from '@angular/common/http'
import {PostAPIService} from './services/post-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'testAPI-1';
  // users:any;
  // constructor(private postapi:PostAPIService)
  // {
  //  postapi.users().subscribe((data:any)=>{
  //    console.log("data",data);
  //    this.users=data;

  //  });
  //   }
  // }
  title = 'testAPI-1';
postData={
  ServiceProviderId:'19074c9e-759a-456d-a9ba-510077cfb82b',
  AppointmentType:'Clinic'
};
url='https://devsoowgoodapi.azurewebsites.net/api/AppointmentSettings/AppointmentListForBooking';
json:any;
output:any;
  constructor(private http: HttpClient)
  {
  http.post(this.url,this.postData).toPromise().then((data:any) =>{
  console.log(data);
  console.log(data.json);
  this.json= JSON.stringify(data.json);
  this.output=data;
  // this.json = data.results.appointmentdatedata;

})
  }
}

