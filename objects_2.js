/*
  We want to create, retrieve, and add information about your favorite sports team. 
  Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

*/

const team = {
    _players: [
      {
        firstName: "Matthew",
        lastName: "Stafford",
        age: 34,
      },
      {
        firstName: "Cooper",
        lastName: "Kupp",
        age: 29,
      },
      {
        firstName: "Aaron",
        lastName: "Donald",
        age: 31,
      },
    ],
    _games: [
      {
        opponent: "Bufflo Bills",
        teamPoints: 10,
        opponentPoints: 31,
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player); // appending player into player method 
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentsPoints) {
      let game = {
        opponent : newOpponent, 
        teamPoints : newTeamPoints, 
        opponentPoints : newOpponentsPoints 
      };
       this.games.push(game) // appending game into games method
    }
  };
  
  team.addPlayer("Bugs", "Bunny", 76); // verifying player method
  team.addGame("Falcons", 31, 27) // verifying add game method 
  console.log(team.games)
  