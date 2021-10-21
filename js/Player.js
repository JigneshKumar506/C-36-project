class Player {
    constructor(){
      this.distance = 0;
      this.name = null ;
      this.index = 0 ;

      

    }
    
    getCount(){
      var gameStateRef  = database.ref('playerCount');
      gameStateRef.on("value",function(data){
         playerCount = data.val();
      })
     
    }
  
    updateCount (state)  {
      database.ref('/').update({
        playerCount: state
      });
    }

    update () {
     var playerIndex = "players/player" + this.index
     database.ref (playerIndex).set ({
       name: this.name ,
       distance: this.distance 
     }) 
    }
      static getPlayerInfo(){
      var gameStateRef  = database.ref('players');
      gameStateRef.on("value",function(data){
         allPlayers = data.val();
      })
 
  }
}