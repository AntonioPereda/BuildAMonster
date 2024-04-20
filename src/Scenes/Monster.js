class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.rhandX = this.bodyX + 80;
        this.rhandY = 380;
        this.lhandX = this.bodyX - 80;
        this.lhandY = 380;

        this.rlegX = this.bodyX+60;
        this.rlegY = 500;
        this.llegX = this.bodyX-50;
        this.llegY = 500;

        this.eyeX = this.bodyX;
        this.eyeY = 300;

        this.mouthX = this.bodyX;
        this.mouthY = 350;

        this.smallhornX = this.bodyX+50;
        this.smallhornY = 270;

        this.bighornX = this.bodyX-50;
        this.bighornY = 260;

        
    }
    

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        let partaxis = [this.bodyX, this.bodyY, this.rhandX, this.rhandY, this.lhandX, this.lhandY, 
            this.rlegX, this.rlegY, this.eyeX, this.eyeY, this.mouthX, this.mouthY, this.smallhornX,
            this.smallhornY, this.bighornX, this.bighornY];

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteF.png");

        my.sprite.rleg = this.add.sprite(this.rlegX, this.rlegY, "monsterParts", "leg_greenA.png");
        my.sprite.lleg = this.add.sprite(this.llegX, this.rlegY, "monsterParts", "leg_greenA.png");
        my.sprite.lleg.flipX = true;

        my.sprite.rhand = this.add.sprite(this.rhandX, this.rhandY, "monsterParts", "arm_greenA.png");
        my.sprite.lhand = this.add.sprite(this.lhandX, this.rhandY, "monsterParts", "arm_greenA.png");
        my.sprite.lhand.flipX = true;

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_green.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthJ.png");
        my.sprite.mouth2 = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthF.png");
        
        my.sprite.mouth.visible = true;
        my.sprite.mouth2.visible = false

        my.sprite.smallhorn = this.add.sprite(this.smallhornX, this.smallhornY, "monsterParts", "detail_green_horn_small.png");
        my.sprite.bighorn = this.add.sprite(this.bighornX, this.bighornY, "monsterParts", "detail_green_horn_large.png");
        my.sprite.bighorn.flipX = true;
        //console.log(this.bodyX);

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);    
        sKey.on('down', (key, event) => {
            //console.log("A");
            my.sprite.mouth.visible = true;
            my.sprite.mouth2.visible = false;
        });

        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);    
        fKey.on('down', (key, event) => {
            console.log("paying respects");
            my.sprite.mouth.visible = false;
            my.sprite.mouth2.visible = true;
        });
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        this.input.keyboard.on("keydown", function(keypress) {

            if(keypress.code === "KeyA" && my.sprite.body.x > 122.5){
                //console.log("A");
                //console.log(my.sprite.body.x);
                my.sprite.body.x = my.sprite.body.x - 0.07;
                my.sprite.rhand.x = my.sprite.rhand.x - 0.07;
                my.sprite.lhand.x = my.sprite.lhand.x - 0.07;
                my.sprite.eye.x = my.sprite.eye.x - 0.07;
                my.sprite.smallhorn.x = my.sprite.smallhorn.x - 0.07;
                my.sprite.bighorn.x = my.sprite.bighorn.x - 0.07;
                my.sprite.lleg.x = my.sprite.lleg.x - 0.07;
                my.sprite.rleg.x = my.sprite.rleg.x - 0.07;
                my.sprite.mouth.x = my.sprite.mouth.x - 0.07;
                my.sprite.mouth2.x = my.sprite.mouth2.x - 0.07;


            }

            if(keypress.code === "KeyD" && my.sprite.body.x < 587.42){
                //console.log("A");
                //console.log(my.sprite.body.x);
                my.sprite.body.x = my.sprite.body.x + 0.07;
                my.sprite.rhand.x = my.sprite.rhand.x + 0.07;
                my.sprite.lhand.x = my.sprite.lhand.x + 0.07;
                my.sprite.eye.x = my.sprite.eye.x + 0.07;
                my.sprite.smallhorn.x = my.sprite.smallhorn.x + 0.07;
                my.sprite.bighorn.x = my.sprite.bighorn.x + 0.07;
                my.sprite.lleg.x = my.sprite.lleg.x + 0.07;
                my.sprite.rleg.x = my.sprite.rleg.x + 0.07;
                my.sprite.mouth.x = my.sprite.mouth.x + 0.07;
                my.sprite.mouth2.x = my.sprite.mouth2.x + 0.07;

            }
        
        })

            
            
       
    }

}