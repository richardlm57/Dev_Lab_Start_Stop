import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  /**Please. fill with the function Start URL**/
  private startUrl = 'https://lrichard-functionapp.azurewebsites.net/api/Start';

  /**Please. fill with the function Stop URL**/
  private stopUrl = 'https://lrichard-functionapp.azurewebsites.net/api/Stop';

  /**Please. fill with the VM's information**/
  private VMInfo = {vmname: 'lrichard-VMv2', resourcegroup: 'lrichard-Angular-FunctionDevLabTest2'};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  startVM() {
    this.http.post(this.startUrl, this.VMInfo).subscribe(something => console.log(something));
    console.log("Start");
  }

  stopVM() {
    this.http.post(this.stopUrl, this.VMInfo).subscribe(something => console.log(something));
    console.log("Stop");
  }
  /**Here you can create a stop function**/
}
