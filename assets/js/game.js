// window.alert("This is an alert! Javascript is Running!");

var playerName = window.prompt("Whats your robot name?");
var playerHealth= 100;
var playerAttack = 10;

//you can also log multiple values at once like this.
console.log(playerName,playerAttack,playerHealth)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    // alert players that we are starting the round
    window.alert("Welcome to Robot Gladiators!")

    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'Fight' or 'Skip' to choose.");
    console.log(promptFight);

    if (promptFight === 'fight' || promptFight === 'FIGHT'){
            // substract the value of 'playerAttack' from the value of 'enemyhealth' and use that result to update the value in the 'enemyhealth variable'
        enemyHealth= enemyHealth-playerAttack;
        // Log resulting message to the console so we know that it worked 
        console.log(playerName+ " attacked " +enemyName + "." +enemyName+ " now has "+ enemyHealth+ " health remaining.")

        // Check enemys health 
        if(enemyHealth<=0){
            window.alert(enemyName +" has died!");
        }
        else{
            window.alert(enemyName+ " still has "+ enemyHealth+ " health left.")
        }
        
        // Substract the value of 'Enemy attack' from the value of 'playerHealth' and use that result to update the value in teh 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        // Log a result message to the console so we know that it worked 
        console.log(enemyName +" attacked "+playerName+ ". " +playerName+ " now has "+ playerHealth+ " health remaining")

        // check players health

        if(playerHealth<=0){
            window.alert(playerName +" has died!");
        }
        else{
            window.alert(playerName+ " still has "+playerHealth+ " health left." );
        }
     //IF PLAYER CHOOSES TO SKIP
    }else if (promptFight ==='skip' || promptFight === 'SKIP'){
        window.alert(playerName + " has choosen to skip the fight!");
        // CONFIRM PLAYER WANTS TO SKIP
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        if(confirmSkip){
            window.alert(playerName+ " has decided to skip this fight. GOODBYE!");
            playerMoney = playerMoney-2;
        }
        // IF NO (FALSE) ASK QUESTION AGAIN BY RUNNING fight() AGAIN
        else{
            fight();
        }
    }else{
        window.alert("You need ot choose a valid option. Try again!");
    }


    

};

fight();
