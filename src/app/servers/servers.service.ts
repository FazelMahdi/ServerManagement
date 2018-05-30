import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class ServersService {

  private servers = [
    {
      id: 1,
      name:'سرور فروشگاهی',
      status: 'آنلاین'
    },
    
    {
      id: 2,
      name:'سرور خبری',
      status: 'آنلاین'
    },
    {
      id: 3,
      name:'سرور ورزشی',
      status: 'آفلاین'
    }
  ];

getServers(){
    return this.servers.slice();
}

getServer(id: number){
  const server = this.servers.find(
    (s) =>{
      return s.id === id;
    }
  );
  return server;
}

updateServer(id: number, serverInfo: {name: string, status: string}){
  const server = this.servers.find(
    (s) =>{
      return s.id === id;
    }
  );
  if(server){
    server.name = serverInfo.name;
    server.status = serverInfo.status
  }
}
  constructor() { }

}
