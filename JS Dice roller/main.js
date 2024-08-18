function rollDice(){

    const numberOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("images");
    const values = [];
    const images = [];


    for(let i = 0; i < numberOfDice; i++ ){
        const value = Math.floor(Math.random() * 6) + 1;
       values.push(value);
       images.push(`<img src="diceImagees/${value}.png">`);
    }
    
    diceResult.textContent = `dice ${values.join(', ')}`
    diceImages.innerHTML = images.join(' ');
}

