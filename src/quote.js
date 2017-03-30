function displayQuote(){

quote = [];
quoter = [];
quote[0] = "Believe you can and you're halfway there";
quoter[0] = "Theodore Roosevelt";
quote[1] = "If oppertunity doesnt knock, build a door";
quoter[1] = "Milton Berle";
quote[2] = "The pure and simple truth is rarely pure and never simple.";
quoter[2] = "Oscar Wilde";
quote[3] = "The secret of getting ahead is getting started";
quoter[3] = "Mark Twain";
quote[4] = "If you dream it, you can do it.";
quoter[4] = "Walt Disney";
quote[5] = "You must be the change you wish to see in the world.";
quoter[5] = "Mahatma Gandhi";
quote[6] = "If you judge people, you have no time to love them.";
quoter[6] = "Mother Teresa";
quote[7] = "It is our choices that show what we truely are, far more than our abilities.";
quoter[7] = "JK Rowling";
quote[8] = "If you can't make it good, at least make it look good.";
quoter[8] = "Bill Gates";
quote[9] = "It always seems impossible until its done";
quoter[9] = "Nelson Mandela";
quote[10] = "Happiness can exist only in acceptance.";
quoter[10] = "George Orwell";


//calculate a random quote to display on dashboard
randomQOTD = Math.floor(Math.random() * quote.length);

//display the quotation and the quote author


document.getElementById("MyQuotes").textContent = "Quote of the Day: " + quote[randomQOTD] + "-" + quoter[randomQOTD];
}

displayQuote();
