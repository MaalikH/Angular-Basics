import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'

})	

export class ServerComponent {
	//Example 1
	serverId: number = 10;
	serverStatus: string = 'offline';

	//returning using method
	getServerStatus() {
		return this.serverStatus;
	}

}