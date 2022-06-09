import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// users()
//       {
//         this.http.post(this.url,this.postData).toPromise().then((data:any) =>{
//           console.log(data);
//           console.log(data.json);
//           this.json= JSON.stringify(data.json);
//         })
//       }