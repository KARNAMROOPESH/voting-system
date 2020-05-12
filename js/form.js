class Form{
        constructor(){

        }
        display(){
            var title = createElement('h2', 'Multiplayer Car Racing Game');
            title.position(280,100);
            var name = createInput("Enter Your Name");
            name.position(350,250);
            var button = createButton('PLAY');
            button.position(480,300);
            button.mousePressed(function(){
                name.hide();
                button.hide();
                var n = name.value();
               playerCount = playerCount+1;
               player.updateCount(playerCount);
               player.update( n );
                var greeting = createElement('h3');
                greeting.html("Hello "+ n);
                greeting.position(350,250);
            });

        }
}