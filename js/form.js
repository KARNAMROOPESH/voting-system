class Form{
        constructor(){

        }
        display(){
            var title = createElement('h2', 'THE GOVERNMENT SHOULD STOP RECOMENDATIONS AND RESERVATIONS');
            title.position(390,100);
            var name = createInput("Enter Your Name");
            name.position(550,250);
            var nam = createInput("Enter Your Email");
            nam.position(550,350);
            var button = createButton('YES');
            button.position(880,300);
            var button1 = createButton('NO');
            button1.position(980,300);
            button.mousePressed (function(){
                name.hide();
                nam.hide();
                button.hide();
                button1.hide();
                var n = name.value();
               playerCount = playerCount+1;
               player.updateCount(playerCount);
               var ec = nam.value();
               ec = ec+1;
               var r = createElement('h1','THE REASON FOR YOUR DESISION OR VOTE');
            r.position(390,350);
            var R1 = createInput(":");
            R1.position(490,350);
            var button12 = createButton('CONFIRM');
            button12.position(980,300);
            button12.mousePressed(  function(){
                var  g = createElement('h1','THANK YOU');
                g.position(450,200);
                button12.hide();
                R1.hide();
                r.hide();
               } )
                
            });
             button1.mousePressed (function(){
                name.hide();
                nam.hide();
                button.hide();
                button1.hide();
                var na = name.value();
               playerCount1 = playerCount1+1;
               player.updateCount(playerCount1);
               player.update( na );
               var ec1 =nam.value();
               ec1 = ec1+1;
               var r1 = createElement('h1','THE REASON FOR YOUR DESISION OR VOTE');
               r1.position(390,350);
               var R = createInput(":");
            R.position(490,350);
            var button4 = createButton('CONFIRM');
            button4.position(980,300);
            button4.mousePressed(  function(){
                var  g = createElement('h1','THANK YOU');
                g.position(450,200);
               button4.hide();
               r1.hide();
               R1.hide();
               } )
            });
            
        }
}