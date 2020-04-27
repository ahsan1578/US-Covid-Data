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
alaska = new State("Alaska",0,0,0,0,0,0);
stateList.push(alaska);
arizona = new State("Arizona",0,0,0,0,0,0);
stateList.push(arizona);
arkansas = new State("Arkansas",0,0,0,0,0,0);
stateList.push(arkansas);
california = new State("California",0,0,0,0,0,0);
stateList.push(california);
colorado = new State("Colorado",0,0,0,0,0,0);
stateList.push(colorado);
connecticut = new State("Connecticut",0,0,0,0,0,0);
stateList.push(connecticut);
delaware = new State("Delaware",0,0,0,0,0,0);
stateList.push(delaware);
florida = new State("Florida",0,0,0,0,0,0);
stateList.push(florida);
georgiA = new State("Georgia",0,0,0,0,0,0);
stateList.push(georgiA);
hawaii = new State("Hawaii",0,0,0,0,0,0);
stateList.push(hawaii);
idaho = new State("Idaho",0,0,0,0,0,0);
stateList.push(idaho);
illinois = new State("Illinois",0,0,0,0,0,0);
stateList.push(illinois);
indiana = new State("Indiana",0,0,0,0,0,0);
stateList.push(indiana);
iowa = new State("Iowa",0,0,0,0,0,0);
stateList.push(iowa);
kansas = new State("Kansas",0,0,0,0,0,0);
stateList.push(kansas);
kentucky = new State("Kentucky",0,0,0,0,0,0);
stateList.push(kentucky);
louisiana = new State("Louisiana",0,0,0,0,0,0);
stateList.push(louisiana);
maine = new State("Maine",0,0,0,0,0,0);
stateList.push(maine);
maryland = new State("Maryland",0,0,0,0,0,0);
stateList.push(maryland);
massachusetts = new State("Massachusetts",0,0,0,0,0,0);
stateList.push(massachusetts);
michigan = new State("Michigan",0,0,0,0,0,0);
stateList.push(michigan);
minnesota = new State("Minnesota",0,0,0,0,0,0);
stateList.push(minnesota);
mississippi = new State("Mississippi",0,0,0,0,0,0);
stateList.push(mississippi);
missouri = new State("Missouri",0,0,0,0,0,0);
stateList.push(missouri);
montana = new State("Montana",0,0,0,0,0,0);
stateList.push(montana);
nebraska = new State("Nebraska",0,0,0,0,0,0);
stateList.push(nebraska);
nevada = new State("Nevada",0,0,0,0,0,0);
stateList.push(nevada);
newHampshire = new State("New Hampshire",0,0,0,0,0,0);
stateList.push(newHampshire);
newJersey = new State("New Jersey",0,0,0,0,0,0);
stateList.push(newJersey);
newMexico = new State("New Mexico",0,0,0,0,0,0);
stateList.push(newMexico);
newYork = new State("New York",0,0,0,0,0,0);
stateList.push(newYork);
northCarolina = new State("North Carolina",0,0,0,0,0,0);
stateList.push(northCarolina);
northDakota = new State("North Dakota",0,0,0,0,0,0);
stateList.push(northDakota);
ohio = new State("Ohio",0,0,0,0,0,0);
stateList.push(ohio);
oklahoma = new State("Oklahoma",0,0,0,0,0,0);
stateList.push(oklahoma);
oregon = new State("Oregon",0,0,0,0,0,0);
stateList.push(oregon);
pennsylvania = new State("Pennsylvania",0,0,0,0,0,0);
stateList.push(pennsylvania);
rhodeIsland = new State("Rhode Island",0,0,0,0,0,0);
stateList.push(rhodeIsland);
southCarolina = new State("South Carolina",0,0,0,0,0,0);
stateList.push(southCarolina);
southDakota = new State("South Dakota",0,0,0,0,0,0);
stateList.push(southDakota);
tennessee = new State("Tennessee",0,0,0,0,0,0);
stateList.push(tennessee);
texas = new State("Texas",0,0,0,0,0,0);
stateList.push(texas);
utah = new State("Utah",0,0,0,0,0,0);
stateList.push(utah);
vermont = new State("Vermont",0,0,0,0,0,0);
stateList.push(vermont);
virginia = new State("Virginia",0,0,0,0,0,0);
stateList.push(virginia);
washington = new State("Washington",0,0,0,0,0,0);
stateList.push(washington);
westVirginia = new State("West Virginia",0,0,0,0,0,0);
stateList.push(westVirginia);
wisconsin = new State("Wisconsin",0,0,0,0,0,0);
stateList.push(wisconsin);
wyoming = new State("Wyoming",0,0,0,0,0,0);
stateList.push(wyoming);

