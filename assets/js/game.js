var playerName = window.prompt("Whats your robot name?");
var playerHealth= 100;
var playerAttack = 12;
var playerMoney = 10;

//you can also log multiple values at once like this.
console.log(playerName,playerAttack,playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
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

        //remove enemys health
        enemyHealth= enemyHealth-playerAttack;
        // Log resulting message to the console so we know that it worked 
        console.log(playerName+ " attacked " +enemyName + ". " +enemyName+ " now has "+ enemyHealth+ " health remaining.")
        if(enemyHealth<=0){
            window.alert(enemyName +" has died!");
        }
        else{
        window.alert(enemyName+ " still has "+ enemyHealth+ " health left.")
        }
        //remove players health
        playerHealth = playerHealth - enemyAttack;
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

for(var i=0; i < enemyNames.length ; i++){
    if (playerHealth> 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i+1))
        var pickedEnemyNames = enemyNames[i];
        var enemyHealth = 50;
        // debugger
        fight(pickedEnemyNames);
    }else{
        window.alert("You have lost your robot in Battle! GAME OVER")
        break;
    }
}
