//Hangman-Game 

//Variables


    // startGame: function () {
    //     //resets game
        
    // 
    var Hangman = {
        heroes: ["Jaina", "Rexxar", "Thrall"],
        wins: 0,
        guesses: 7,
        hiddenWord: " ", 

            getHero: function() {
                min = Math.ceil(0);
                max = Math.floor(2);
                index = Math.floor(Math.random() * (max - min)) + min;
                return this.heroes[index]
            }
    },
    
    document.onkeyup = function (event) { 
        var hero = Hangman.getHero()
        console.log(hero)       

     
}