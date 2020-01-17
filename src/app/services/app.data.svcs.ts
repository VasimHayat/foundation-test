import { Observable } from 'rxjs';
import { List } from 'immutable';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})
export class AppDataSvcs{
    getData() :Observable<List<object>>{
        let _dataArray = [];
        for (var i = 0; i < 100000; i++) {
            var rowItem = this.createRowItem(i);
            _dataArray.push(rowItem);
            if(i== 99999){
                return new Observable(subscriber => {
                    subscriber.next(List(_dataArray)); 
                      subscriber.complete(); 
                  });
            }
        }
          
    }


    private countries = [
        { country: "Ireland", continent: "Europe", language: "English" },
        { country: "Spain", continent: "Europe", language: "Spanish" },
        { country: "United Kingdom", continent: "Europe", language: "English" },
        { country: "France", continent: "Europe", language: "French" },
        { country: "Germany", continent: "Europe", language: "German" },
        { country: "Luxembourg", continent: "Europe", language: "French" },
        { country: "Sweden", continent: "Europe", language: "Swedish" },
        { country: "Norway", continent: "Europe", language: "Norwegian" },
        { country: "Italy", continent: "Europe", language: "Italian" },
        { country: "Greece", continent: "Europe", language: "Greek" },
        { country: "Iceland", continent: "Europe", language: "Icelandic" },
        { country: "Portugal", continent: "Europe", language: "Portuguese" },
        { country: "Malta", continent: "Europe", language: "Maltese" },
        { country: "Brazil", continent: "South America", language: "Portuguese" },
        { country: "Argentina", continent: "South America", language: "Spanish" },
        { country: "Colombia", continent: "South America", language: "Spanish" },
        { country: "Peru", continent: "South America", language: "Spanish" },
        { country: "Venezuela", continent: "South America", language: "Spanish" },
        { country: "Uruguay", continent: "South America", language: "Spanish" },
        { country: "Belgium", continent: "Europe", language: "French" }
    ];

    private games = ["Chess", "Cross and Circle", "Daldos", "Downfall", "DVONN", "Fanorona", "Game of the Generals", "Ghosts",
        "Abalone", "Agon", "Backgammon", "Battleship", "Blockade", "Blood Bowl", "Bul", "Camelot", "Checkers",
        "Go", "Gipf", "Guess Who?", "Hare and Hounds", "Hex", "Hijara", "Isola", "Janggi (Korean Chess)", "Le Jeu de la Guerre",
        "Patolli", "Plateau", "PUNCT", "Rithmomachy", "Sahkku", "Senet", "Shogi", "Space Hulk", "Stratego", "Sugoroku",
        "Tab", "Tablut", "Tantrix", "Wari", "Xiangqi (Chinese chess)", "YINSH", "ZERTZ", "Kalah", "Kamisado", "Liu po",
        "Lost Cities", "Mad Gab", "Master Mind", "Nine Men's Morris", "Obsession", "Othello"
    ];

    private firstNames = ["Tony", "Andrew", "Kevin", "Bricker", "Dimple", "Gil", "Sophie", "Isabelle", "Emily", "Olivia", "Lily", "Chloe", "Isabella",
        "Amelia", "Jessica", "Sophia", "Ava", "Charlotte", "Mia", "Lucy", "Grace", "Ruby",
        "Ella", "Evie", "Freya", "Isla", "Poppy", "Daisy", "Layla"];
    private lastNames = ["Smith", "Connell", "Flanagan", "McGee", "Unalkat", "Lopes", "Beckham", "Black", "Braxton", "Brennan", "Brock", "Bryson", "Cadwell",
        "Cage", "Carson", "Chandler", "Cohen", "Cole", "Corbin", "Dallas", "Dalton", "Dane",
        "Donovan", "Easton", "Fisher", "Fletcher", "Grady", "Greyson", "Griffin", "Gunner",
        "Hayden", "Hudson", "Hunter", "Jacoby", "Jagger", "Jaxon", "Jett", "Kade", "Kane",
        "Keating", "Keegan", "Kingston", "Kobe"];



        
 createRowItem(row) {
    let rowItem = {id:row,country:'',continent:'',language:'',name:'',game:'',bankBalance:0,rating:0};

    //create data for the known columns
    var countriesToPickFrom = Math.floor(this.countries.length * ((row % 3 + 1) / 3));
    var countryData = this.countries[(row * 19) % countriesToPickFrom];
    rowItem.country = countryData.country;
    rowItem.continent = countryData.continent;
    rowItem.language = countryData.language;

    var firstName = this.firstNames[row % this.firstNames.length];
    var lastName = this.lastNames[row % this.lastNames.length];
    rowItem.name = firstName + " " + lastName;

    rowItem.game = this.games[Math.floor(row * 13 / 17 * 19) % this.games.length];

    rowItem.bankBalance = (Math.round(this.pseudoRandom() * 100000)) - 3000;
    rowItem.rating = (Math.round(this.pseudoRandom() * 5));  
    return rowItem;
}

  seed = 123456789;
  m = Math.pow(2, 32);
  a = 1103515245;
  c = 12345;

  pseudoRandom() {
    this.seed = (this.a * this.seed + this.c) % this.m;
    return this.seed / this.m;
}
}