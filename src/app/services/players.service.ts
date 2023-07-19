import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { playerI } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  db_url: string = 'https://back-player2-deploy.vercel.app/players';
  db_teams:string ="http://localhost:5000/teams"

public playerData:playerI={
  _id:"",
  name:"",
  image:"",
  characteristics:{
    MVPs:0,
    position:"",
    team:"",
    championships:0
  }
  
}
//ruta de imagen para guardar por defecto
//https://img.freepik.com/vector-gratis/pelota-baloncesto-aislada_1284-42545.jpg?w=200
public allTeams!:string[];


constructor(private http:HttpClient) { }

getAllTeams(){
  return this.http.get(this.db_teams)
}

getAllPlayers(){
    return this.http.get(this.db_url)
}
getPlayerById(id:string){
    return this.http.get(`${this.db_url}/${id}`)
}
postPlayer(player: playerI) {
  return this.http.post(this.db_url, player);
}
modifyItem(player: playerI) {
  this.playerData = player;
}
putAvenger(playerId: any, editedPlayer: playerI) {
  this.playerData={
    _id:"",
    name:"",
    image:"",
    characteristics:{
      MVPs:0,
      position:"",
      team:"",
      championships:0
    }
  }
  return this.http.put(`${this.db_url}/${playerId}`, editedPlayer);
}
deletePlayer(id: string) {
  return this.http.delete(`${this.db_url}/${id}`);
}

}
