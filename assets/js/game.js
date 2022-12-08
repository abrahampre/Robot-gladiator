var playerName = window.prompt("Whats your robot name?");
var playerHealth= 100;
var playerAttack = 12;
var playerMoney = 10;



//you can also log multiple values at once like this.
console.log(playerName,playerAttack,playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
var enemyHealth = 50;
console.log(enemyNames)
window.alert("Welcome to Robot Gladiators!")

// fight function with parameter for enemys name
var fight = function(enemyName){
    
    while(enemyHealth>0 && playerHealth>0 ){
        // Ask player if theyd like to fight or run
        var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'Fight' or 'Skip' to choose.");

        if (promptFight ==='skip' || promptFight === 'SKIP'){
            window.alert(playerName + " has choosen to skip the fight!");
            // CONFIRM PLAYER WANTS TO SKIP
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            if(confirmSkip){
                window.alert(playerName+ " has decided to skip this fight. GOODBYE!");
                playerMoney = playerMoney-10;
                console.log("playerMoney", playerMoney)
                break;
            }
        };

        // generate a random damage value based on players attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth= Math.max(0,enemyHealth-damage);

        // Log resulting message to the console so we know that it worked 
        console.log(playerName+ " attacked " +enemyName + ". " +enemyName+ " now has "+ enemyHealth+ " health remaining.")
        if(enemyHealth<=0){
            window.alert(enemyName +" has died!");
            break;
        }
        else{
        window.alert(enemyName+ " still has "+ enemyHealth+ " health left.")
        }
        //remove players health
        var damage = randomNumber(playerAttack - 3 ,playerAttack)
        playerHealth = Math.max(0, playerHealth - damage)
        // Log a result message to the console so we know that it worked 
        console.log(enemyName +" attacked "+playerName+ ". " +playerName+ " now has "+ playerHealth+ " health remaining")
        // check players health
        if(playerHealth<=0){
            window.alert(playerName +" has died!");
            break;
        }
        else{
        window.alert(playerName+ " still has "+playerHealth+ " health left." );
        }
    }
};



// fight(enemyNames[1]);
var startGame = function(){

    playerHealth= 100;
    playerAttack = 12;
    playerMoney = 10;
    
    for(var i=0; i < enemyNames.length ; i++){
        if (playerHealth> 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1))
            var pickedEnemyNames = enemyNames[i];
            enemyHealth = randomNumber(40,60);
            
            // debugger;
            fight(pickedEnemyNames);

            // STORE
            if(playerHealth> 0 && i<enemyNames.length - 1){
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
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! You have a score of " + playerMoney+ ".")
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
            if (playerMoney>= 7){
                window.alert("Refilling player's healt by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else{
                window.alert("You dont have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney>=7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack and decrease money 
                playerAttack = playerAttack + 6 ;
                playerMoney = playerMoney - 7;
            }else{
                window.alert("You dont have enough money")
            }
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

// function to create random number 
var randomNumber = function(min,max){
    var value = Math.floor(Math.random()* (max - min +1))+ min;

    // console.log("the returning value is " + value);

    return value;
}

// start the game when the page loads 
startGame();
