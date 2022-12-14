window.alert("Welcome to Robot Gladiators!")


var fightOrSkip = function (){
    //ask player if they will like to skip using fightOrSkip function

    var promptFight = window.prompt('Would you like to Fight or Skip this battle? Enter "FIGHT" or "SKIP" to choose.');

    promptFight = promptFight.toLowerCase();

    if (promptFight === ""||promptFight === null){
        window.alert("Please provide a valid answer! Try Again!")
        // debugger;
        return fightOrSkip();

    }

    if(promptFight ==="skip"|| promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?")

        if(confirmSkip){
            window.alert("Player has decided to skip the fight")
            // substract money from Playermoney for skipping
            playerInfo.money = playerInfo.money-10;
            return true;
        }
    }
    return false;
}


// fight function with parameter for enemys name
var fight = function(enemy){

    var isPlayerTurn = true;

    if(Math.random() > 0.5){
        isPlayerTurn = false;
    }
    
    while(enemy.health>0 && playerInfo.health>0 ){
       
        if(isPlayerTurn){
            // ask the player if they will like to fight or skip 
                if(fightOrSkip()){
                    // if true leave by breaking the loop
                    break;
                }

            // generate a random damage value based on players attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            // remove enemys health by substracting the amount we set in the damage variable 
            enemy.health= Math.max(0,enemy.health-damage);

            // Log resulting message to the console so we know that it worked 
            console.log(playerInfo.name+ " attacked " +enemy.name + ". " +enemy.name+ " now has "+ enemy.health+ " health remaining.")
           
            //    check enemys health 
            if(enemy.health<=0){
                window.alert(enemy.name +" has died!");
                // award player for winning 
                playerInfo.money = playerInfo.money + 20;
                // leave while loop
                break;
            }else{
                window.alert(enemy.name+ " still has "+ enemy.health+ " health left.")
            }

        // player gets attacked first 
        }else{

            var damage = randomNumber(enemy.attack - 3 ,enemy.attack)

            // remove players health by substracting the amount we set in teh damage variable 
            playerInfo.health = Math.max(0, playerInfo.health - damage)
            // Log a result message to the console so we know that it worked 
            console.log(enemy.name +" attacked "+playerInfo.name+ ". " +playerInfo.name+ " now has "+ playerInfo.health+ " health remaining")

            // check players health
            if(playerInfo.health<=0){
                window.alert(playerInfo.name +" has died!");
                // leave while loop if player is dead 
                break;
            }else{
            window.alert(playerInfo.name+ " still has "+playerInfo.health+ " health left." );
            }
        }
    isPlayerTurn = !isPlayerTurn;
    }
    debugger;
};

// function to create random number 
var randomNumber = function(min,max){
    var value = Math.floor(Math.random()* (max - min +1))+ min;

    // console.log("the returning value is " + value);

    return value;
}

var getPlayerName = function(){
    var name = "";
    name = window.prompt ("What is your robot name?");
    while(name === ""||name===null){
        name = prompt("What is your robot name?")
    }
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health= 100;
        this.money= 10;
        this.attack= 10;
    },
    refillHealth: function(){
        if(this.money >=7){
            window.alert("Refilling players health by 20 for 7 dollars!");
            this.health += 20;
            this.money -= 7;
        }else{
            window.alert("You dont have enough money.")
        }
    },
    upgradeAttack: function(){
        if(this.money>=7){
            window.alert("Upgrading players attack by 6 for 7 dollars!");
            this.attack += 6;
            this.money -= 7;
        }else{
            window.alert("You dont have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,15)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
]

// fight(enemy.names[1]);
var startGame = function(){

    playerInfo.reset();
    
    for(var i=0; i < enemyInfo.length ; i++){
        if (playerInfo.health> 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1))
            
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);
            
            fight(pickedEnemyObj);

            // STORE
            if(playerInfo.health> 0 && i<enemyInfo.length - 1){
                var storeConfirm = window.confirm("Fight is over, visit the store before the next round?");

                if(storeConfirm){
                    shop();
                }
            }
        }else{
            window.alert("You have lost your robot in Battle! GAME OVER")
            break;
        }
    }
    // Play again
    endGame();
}


var endGame = function(){

    window.alert("The game has ended, lets see how you did!")

    // check localStorage highscore if not set it to  0
    
    highScore = localStorage.getItem("highscore");
    if(highScore ===null){
        highScore = 0;
    }

    if(highScore> playerInfo.money){
        window.alert("You did not beat the highest score of " +highScore )
    }else{
        localStorage.clear();
        localStorage.setItem("Robot",playerInfo.name)
        localStorage.setItem("highscore", playerInfo.money)
        window.alert("You beat the high score!")
    }

    // if player is still alive, player wins!
    if(playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You have a score of " + playerInfo.money+ ".")
    }
    else{
        window.alert("You've lost your robot in battle!")
    }

    // ask player if they will like to play again 

    var playAgainConfirm = window.confirm("Would you like to play again?")
    if(playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come Back soon!!")
    }
}

var shop = function (){
    var shopOptionPrompt = window.prompt(" Would you like to REFILL your healt, UPGRADE your attack or LEAVE store?: Please enter : 1 to REFILL , 2 for UPGRADE OR 3 to LEAVE to make a choice.")
    // use swithc to carry out action 
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch(shopOptionPrompt){
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("Please try a valid option");
            // call shop() to  force player to pick valid option 
            shop();
            break;
    }
}



// start the game when the page loads 
startGame();
