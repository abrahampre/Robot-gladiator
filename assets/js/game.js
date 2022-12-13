

window.alert("Welcome to Robot Gladiators!")

// fight function with parameter for enemys name
var fight = function(enemy){
    
    while(enemy.health>0 && playerInfo.health>0 ){
        // Ask player if theyd like to fight or run
        var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'Fight' or 'Skip' to choose.");

        if (promptFight ==='skip' || promptFight === 'SKIP'){
            window.alert(playerInfo.name + " has choosen to skip the fight!");
            // CONFIRM PLAYER WANTS TO SKIP
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            if(confirmSkip){
                window.alert(playerInfo.name+ " has decided to skip this fight. GOODBYE!");
                playerInfo.money = playerInfo.money-10;
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        };

        // generate a random damage value based on players attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health= Math.max(0,enemy.health-damage);

        // Log resulting message to the console so we know that it worked 
        console.log(playerInfo.name+ " attacked " +enemy.name + ". " +enemy.name+ " now has "+ enemy.health+ " health remaining.")
        if(enemy.health<=0){
            window.alert(enemy.name +" has died!");
            break;
        }
        else{
        window.alert(enemy.name+ " still has "+ enemy.health+ " health left.")
        }
        //remove players health
        var damage = randomNumber(enemy.attack - 3 ,enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage)
        // Log a result message to the console so we know that it worked 
        console.log(enemy.name +" attacked "+playerInfo.name+ ". " +playerInfo.name+ " now has "+ playerInfo.health+ " health remaining")
        // check players health
        if(playerInfo.health<=0){
            window.alert(playerInfo.name +" has died!");
            break;
        }
        else{
        window.alert(playerInfo.name+ " still has "+playerInfo.health+ " health left." );
        }
    }
};

// function to create random number 
var randomNumber = function(min,max){
    var value = Math.floor(Math.random()* (max - min +1))+ min;

    // console.log("the returning value is " + value);

    return value;
}

var playerInfo = {
    name: window.prompt("What is your robot Name?"),
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
            
            // debugger;
            fight(pickedEnemyObj);
            debugger;
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
    var shopOptionPrompt = window.prompt(" Would you like to REFILL your healt, UPGRADE your attack or LEAVE store?: Please enter one: 'REFILL' ,'UPGRADE' OR 'LEAVE' to make a choice.")
    // use swithc to carry out action 
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
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
