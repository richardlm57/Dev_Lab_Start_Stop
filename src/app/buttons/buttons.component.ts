import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  private startUrl = 'https://startstopj.azurewebsites.net/api/Start?code=QTunwb7Pe2h6ccOn4agxjhkvnNiskljWuEiDpHOar5rVagXYzbhfDA==';
  private stopUrl = 'https://startstopj.azurewebsites.net/api/Stop?code=J6pbZ7O6T8ToM9e7uszaqyMmurSYfkoNwDoefgZHhecKmgjaFS2Lbg==';
  private getUrl = 'https://startstopj.azurewebsites.net/api/GetVM?code=SNookVpk4j/6Ru4jR8swBiegQC60Cay0/c8lOFkzn/GUgwk1yGS9Tw==';

  private VMInfo = {vmname: 'VMTesting', resourcegroup: 'FEDP-RG'};
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
}
