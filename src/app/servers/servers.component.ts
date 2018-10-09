import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus = "No server was created";
	serverName = '';
	serverCreated = false;
	servers = ['Test Server 1', 'Test Server 2'];

  constructor() { 
  	//binding button to property to allow button to be clicked after 10 seconds
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreationStatus = "Server was created"
  	this.serverCreated = true;
  	this.servers.push(this.serverName);

  }

  onUpdateServerName(event: Event) {
  	this.serverName = (<HTMLInputElement>event.target).value;
  }
}
