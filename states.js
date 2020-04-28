/**
 * @author D M Raisul Ahsan
 * @version 1.0
 */

/**
 * @param name name of the state
 * @param caseData day by day cumulative total cases in the state, type array
 * @param deathData day by day cumulative total deaths in the state, type array
 * @param dailyCases daily cases in the state, type array
 * @param r red
 * @param g green
 * @param b blue
 * @constructor Creates a state object
 */
var State = function (name, caseData, deathData, dailyCases, r, g, b) {
    this.name = name;
    this.caseData = caseData;
    this.deathData = deathData;
    this.dailyCaseData = dailyCases;
    this.isSelected = true;
    this.r = r;
    this.g = g;
    this.b = b;
    this.underMouse = false;
    this.totalBeds = 0;
    this.icuBeds = 0;
    this.shortForm = "St";
}

State.prototype.stateButtonDraw = function (x,y,width, height, size) {
    fill(35, 42, 66);
    stroke(157, 189, 242);
    strokeWeight(1);
    rect(x,y,width,height);
    noStroke();
    if (this.underMouse) {
        fill(255, 0, 0);
        cursor(HAND);
    }else if(this.isSelected){
        fill(157, 189, 242);
    }else{
        fill(255);
    }
    textSize(size);
    text(this.name, x + 0.25 * width, y+0.7*height);
    if(mouseX >x && mouseX < x + width && mouseY > y  && mouseY < y +height){
        this.underMouse = true;
    }else{
        this.underMouse = false;
    }
}

State.prototype.changeSelectionIndiv = function () {
    this.isSelected = this.underMouse;
    if(this.underMouse){
        selectedState = this;
    }
}

State.prototype.changeSelection = function(){
    if(this.underMouse){
        this.isSelected = !this.isSelected;
    }
}

State.prototype.setStateData = function(totalCases, totalDeath, totalDailyCases){
    this.caseData = totalCases;
    this.deathData = totalDeath;
    this.dailyCaseData = totalDailyCases;
}

State.prototype.setBeds = function(totalBeds, icuBeds){
    this.totalBeds = totalBeds;
    this.icuBeds = icuBeds;
}

State.prototype.drawAnimatedPlot = function(dayNumber, xStart, yStart, scaleX, scaleY, type){
    let currX = xStart;
    let currY = yStart;
    for(let i = 0; i<= dayNumber; i++){
        let nextX = xStart + i*scaleX;
        let nextY = 0;
        if(type === "case"){
            nextY = yStart - scaleY*this.caseData[i];
        }else if(type === "death"){
            nextY = yStart - scaleY*this.deathData[i];
        }
        stroke(this.r, this.g, this.b);
        strokeWeight(2);
        line(currX,currY, nextX, nextY);
        currX = nextX;
        currY = nextY;
    }
    noStroke();
    fill(this.r, this.g, this.b);
    textSize(15);
    text(this.shortForm, currX, currY);
}


State.prototype.setColors = function(r,g,b){
    this.r  = r;
    this.g = g;
    this.b = b;
}

State.prototype.setShortForm = function(short){
    this.shortForm = short;
}

let alabama, alaska, arizona, arkansas, california, colorado, connecticut, delaware, florida, georgiA, hawaii, idaho,
    illinois, indiana, iowa, kansas, kentucky, louisiana, maine, maryland, massachusetts, michigan, minnesota, mississippi,
    missouri, montana, nebraska, nevada, newHampshire, newJersey, newMexico, newYork, northCarolina, northDakota, ohio,
    oklahoma, oregon, pennsylvania, rhodeIsland, southCarolina, southDakota, tennessee, texas, utah, vermont, virginia,
    washington, westVirginia, wisconsin, wyoming;

let stateShortForms = ["AL","AK","AZ","AR","CA","CO","CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
    "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

let stateList = [];
alabama = new State("Alabama",0,0,0,0,0,0);
stateList.push(alabama);
alabama.icuBeds = 15996;
alaska = new State("Alaska",0,0,0,0,0,0);
stateList.push(alaska);
alaska.icuBeds = 1658;
arizona = new State("Arizona",0,0,0,0,0,0);
stateList.push(arizona);
arizona.icuBeds = 14451;
arkansas = new State("Arkansas",0,0,0,0,0,0);
stateList.push(arkansas);
arkansas.icuBeds = 9041;
california = new State("California",0,0,0,0,0,0);
stateList.push(california);
california.icuBeds = 80939;
colorado = new State("Colorado",0,0,0,0,0,0);
stateList.push(colorado);
colorado.icuBeds = 9955;
connecticut = new State("Connecticut",0,0,0,0,0,0);
stateList.push(connecticut);
connecticut.icuBeds = 8805;
delaware = new State("Delaware",0,0,0,0,0,0);
stateList.push(delaware);
delaware.icuBeds = 2238;
florida = new State("Florida",0,0,0,0,0,0);
stateList.push(florida);
florida.icuBeds = 56039;
georgiA = new State("Georgia",0,0,0,0,0,0);
stateList.push(georgiA);
georgiA.icuBeds = 24135;
hawaii = new State("Hawaii",0,0,0,0,0,0);
stateList.push(hawaii);
hawaii.icuBeds = 3189;
idaho = new State("Idaho",0,0,0,0,0,0);
stateList.push(idaho);
idaho.icuBeds = 3327;
illinois = new State("Illinois",0,0,0,0,0,0);
stateList.push(illinois);
illinois.icuBeds = 31876;
indiana = new State("Indiana",0,0,0,0,0,0);
stateList.push(indiana);
indiana.icuBeds = 16410;
iowa = new State("Iowa",0,0,0,0,0,0);
stateList.push(iowa);
iowa.icuBeds = 9126;
kansas = new State("Kansas",0,0,0,0,0,0);
stateList.push(kansas);
kansas.icuBeds = 9242;
kentucky = new State("Kentucky",0,0,0,0,0,0);
stateList.push(kentucky);
kentucky.icuBeds = 14022;
louisiana = new State("Louisiana",0,0,0,0,0,0);
stateList.push(louisiana);
louisiana.icuBeds = 14977;
maine = new State("Maine",0,0,0,0,0,0);
stateList.push(maine);
maine.icuBeds = 3408;
maryland = new State("Maryland",0,0,0,0,0,0);
stateList.push(maryland);
maryland.icuBeds = 10977;
massachusetts = new State("Massachusetts",0,0,0,0,0,0);
stateList.push(massachusetts);
massachusetts.icuBeds = 15150;
michigan = new State("Michigan",0,0,0,0,0,0);
stateList.push(michigan);
michigan.icuBeds = 24659;
minnesota = new State("Minnesota",0,0,0,0,0,0);
stateList.push(minnesota);
minnesota.icuBeds = 14528;
mississippi = new State("Mississippi",0,0,0,0,0,0);
stateList.push(mississippi);
mississippi.icuBeds = 11785;
missouri = new State("Missouri",0,0,0,0,0,0);
stateList.push(missouri);
missouri.icuBeds = 18649;
montana = new State("Montana",0,0,0,0,0,0);
stateList.push(montana);
montana.icuBeds = 4005;
nebraska = new State("Nebraska",0,0,0,0,0,0);
stateList.push(nebraska);
nebraska.icuBeds = 6283;
nevada = new State("Nevada",0,0,0,0,0,0);
stateList.push(nevada);
nevada.icuBeds = 6072;
newHampshire = new State("New Hampshire",0,0,0,0,0,0);
stateList.push(newHampshire);
newHampshire.icuBeds = 2658;
newJersey = new State("New Jersey",0,0,0,0,0,0);
stateList.push(newJersey);
newJersey.icuBeds = 20079;
newMexico = new State("New Mexico",0,0,0,0,0,0);
stateList.push(newMexico);
newMexico.icuBeds = 4174;
newYork = new State("New York",0,0,0,0,0,0);
stateList.push(newYork);
newYork.icuBeds = 54627;
northCarolina = new State("North Carolina",0,0,0,0,0,0);
stateList.push(northCarolina);
northCarolina.icuBeds = 22535;
northDakota = new State("North Dakota",0,0,0,0,0,0);
stateList.push(northDakota);
northDakota.icuBeds = 3232;
ohio = new State("Ohio",0,0,0,0,0,0);
stateList.push(ohio);
ohio.icuBeds = 31161;
oklahoma = new State("Oklahoma",0,0,0,0,0,0);
stateList.push(oklahoma);
oklahoma.icuBeds = 11455;
oregon = new State("Oregon",0,0,0,0,0,0);
stateList.push(oregon);
oregon.icuBeds = 6683;
pennsylvania = new State("Pennsylvania",0,0,0,0,0,0);
stateList.push(pennsylvania);
pennsylvania.icuBeds = 36022;
rhodeIsland = new State("Rhode Island",0,0,0,0,0,0);
stateList.push(rhodeIsland);
rhodeIsland.icuBeds = 2548;
southCarolina = new State("South Carolina",0,0,0,0,0,0);
stateList.push(southCarolina);
southCarolina.icuBeds = 12154;
southDakota = new State("South Dakota",0,0,0,0,0,0);
stateList.push(southDakota);
southDakota.icuBeds = 4273;
tennessee = new State("Tennessee",0,0,0,0,0,0);
stateList.push(tennessee);
tennessee.icuBeds = 19034;
texas = new State("Texas",0,0,0,0,0,0);
stateList.push(texas);
texas.icuBeds = 61020;
utah = new State("Utah",0,0,0,0,0,0);
stateList.push(utah);
utah.icuBeds = 5115;
vermont = new State("Vermont",0,0,0,0,0,0);
stateList.push(vermont);
vermont.icuBeds = 1046;
virginia = new State("Virginia",0,0,0,0,0,0);
stateList.push(virginia);
virginia.icuBeds = 18112;
washington = new State("Washington",0,0,0,0,0,0);
stateList.push(washington);
washington.icuBeds = 11587;
westVirginia = new State("West Virginia",0,0,0,0,0,0);
stateList.push(westVirginia);
westVirginia.icuBeds = 6923;
wisconsin = new State("Wisconsin",0,0,0,0,0,0);
stateList.push(wisconsin);
wisconsin.icuBeds = 12799;
wyoming = new State("Wyoming",0,0,0,0,0,0);
stateList.push(wyoming);
wyoming.icuBeds = 1953;

for(let i = 0; i<50; i++){
    let r = 100 + Math.floor(Math.random() * 155);
    let g = 100 + Math.floor(Math.random() * 155);
    let b =  Math.floor(Math.random() * 200);
    stateList[i].setColors(r,g,b);
    stateList[i].setShortForm(stateShortForms[i]);
}

