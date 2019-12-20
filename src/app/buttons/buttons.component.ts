import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  /**Please. fill with the function URL**/
  private startUrl = 'Start URL here';

  /**Please. fill with the VM's information**/
  private VMInfo = {vmname: 'VM name', resourcegroup: 'VM Resource group'};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  startVM() {
    this.http.post(this.startUrl, this.VMInfo).subscribe(something => console.log(something));
    console.log("Start");
  }

  /**Here you can create a stop function**/
}
