class Player{
    constructor(){

    }
    getCount(){
        var a = database.ref('playerCount');
        a.on("value",function(data){
            playerCount = data.val();
        });
    }
    getCount1(){
        var ab  = database.ref('playerCount1');
        ab.on("value",function(data){
            playerCount1 = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
    updateCount1(count1){
        database.ref('/').update({
            playerCount1:count1
        });
    }
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        });
        update(nam);{
            var playerIndex1 = "player"+playerCount1;
            database.ref(playerIndex1).set({
                name:nam
            });
        update(email);{
            var playerIndex1 = "player"+playerCount1;
            database.ref(playerIndex1).set({
                name:nam
            });
      update(nemail1);{
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
          name:name
 });}}}}}
