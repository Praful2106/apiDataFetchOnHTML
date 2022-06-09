import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostAPIService {

  title = 'testAPI-1';
  postData={
    ServiceProviderId:'19074c9e-759a-456d-a9ba-510077cfb82b',
    AppointmentType:'Clinic'
  };
  url='https://devsoowgoodapi.azurewebsites.net/api/AppointmentSettings/AppointmentListForBooking';
  json:any;
    constructor(private http: HttpClient)
    {
  this.http.post(this.url,this.postData).toPromise().then((data:any) =>{
    console.log(data);
    console.log(data.json);
    this.json= JSON.stringify(data.json);
  })
}}
