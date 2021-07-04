class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(430,0);

        this.input.position(430,160);

        this.button.position(450,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);

            
            this.greeting.html("HELLO " + player.name);
            this.greeting.position(430,160);
        })
            
        
    }
}