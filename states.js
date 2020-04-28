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
alabama.totalBeds = 15996;
alabama.icuBeds = 1097;
alaska = new State("Alaska",0,0,0,0,0,0);
stateList.push(alaska);
alaska.totalBeds = 1658;
alaska.icuBeds = 106;
arizona = new State("Arizona",0,0,0,0,0,0);
stateList.push(arizona);
arizona.totalBeds = 14451;
arizona.icuBeds = 1302;
arkansas = new State("Arkansas",0,0,0,0,0,0);
stateList.push(arkansas);
arkansas.totalBeds = 9041;
arkansas.icuBeds = 640;
california = new State("California",0,0,0,0,0,0);
stateList.push(california);
california.totalBeds = 80939;
california.icuBeds = 6986;
colorado = new State("Colorado",0,0,0,0,0,0);
stateList.push(colorado);
colorado.totalBeds = 9955;
colorado.icuBeds = 885;
connecticut = new State("Connecticut",0,0,0,0,0,0);
stateList.push(connecticut);
connecticut.totalBeds = 8805;
connecticut.icuBeds = 594;
delaware = new State("Delaware",0,0,0,0,0,0);
stateList.push(delaware);
delaware.totalBeds = 2238;
delaware.icuBeds = 140;
florida = new State("Florida",0,0,0,0,0,0);
stateList.push(florida);
florida.totalBeds = 56039;
florida.icuBeds = 4787;
georgiA = new State("Georgia",0,0,0,0,0,0);
stateList.push(georgiA);
georgiA.totalBeds = 24135;
georgiA.icuBeds = 2223;
hawaii = new State("Hawaii",0,0,0,0,0,0);
stateList.push(hawaii);
hawaii.totalBeds = 3189;
hawaii.icuBeds = 189;
idaho = new State("Idaho",0,0,0,0,0,0);
stateList.push(idaho);
idaho.totalBeds = 3327;
idaho.icuBeds = 285;
illinois = new State("Illinois",0,0,0,0,0,0);
stateList.push(illinois);
illinois.totalBeds = 31876;
illinois.icuBeds = 2700;
indiana = new State("Indiana",0,0,0,0,0,0);
stateList.push(indiana);
indiana.totalBeds = 16410;
indiana.icuBeds = 1605;
iowa = new State("Iowa",0,0,0,0,0,0);
stateList.push(iowa);
iowa.totalBeds = 9126;
iowa.icuBeds = 416;
kansas = new State("Kansas",0,0,0,0,0,0);
stateList.push(kansas);
kansas.totalBeds = 9242;
kansas.icuBeds = 627;
kentucky = new State("Kentucky",0,0,0,0,0,0);
stateList.push(kentucky);
kentucky.totalBeds = 14022;
kentucky.icuBeds = 1259;
louisiana = new State("Louisiana",0,0,0,0,0,0);
stateList.push(louisiana);
louisiana.totalBeds = 14977;
louisiana.icuBeds = 1215;
maine = new State("Maine",0,0,0,0,0,0);
stateList.push(maine);
maine.totalBeds = 3408;
maine.icuBeds = 218;
maryland = new State("Maryland",0,0,0,0,0,0);
stateList.push(maryland);
maryland.totalBeds = 10977;
maryland.icuBeds = 962;
massachusetts = new State("Massachusetts",0,0,0,0,0,0);
stateList.push(massachusetts);
massachusetts.totalBeds = 15150;
massachusetts.icuBeds = 1273;
michigan = new State("Michigan",0,0,0,0,0,0);
stateList.push(michigan);
michigan.totalBeds = 24659;
michigan.icuBeds = 1894;
minnesota = new State("Minnesota",0,0,0,0,0,0);
stateList.push(minnesota);
minnesota.totalBeds = 14528;
minnesota.icuBeds = 905;
mississippi = new State("Mississippi",0,0,0,0,0,0);
stateList.push(mississippi);
mississippi.totalBeds = 11785;
mississippi.icuBeds = 633;
missouri = new State("Missouri",0,0,0,0,0,0);
stateList.push(missouri);
missouri.totalBeds = 18649;
missouri.icuBeds = 1603;
montana = new State("Montana",0,0,0,0,0,0);
stateList.push(montana);
montana.totalBeds = 4005;
montana.icuBeds = 163;
nebraska = new State("Nebraska",0,0,0,0,0,0);
stateList.push(nebraska);
nebraska.totalBeds = 6283;
nebraska.icuBeds = 478;
nevada = new State("Nevada",0,0,0,0,0,0);
stateList.push(nevada);
nevada.totalBeds = 6072;
nevada.icuBeds = 683;
newHampshire = new State("New Hampshire",0,0,0,0,0,0);
stateList.push(newHampshire);
newHampshire.totalBeds = 2658;
newHampshire.icuBeds = 228;
newJersey = new State("New Jersey",0,0,0,0,0,0);
stateList.push(newJersey);
newJersey.totalBeds = 20079;
newJersey.icuBeds = 1670;
newMexico = new State("New Mexico",0,0,0,0,0,0);
stateList.push(newMexico);
newMexico.totalBeds = 4174;
newMexico.icuBeds = 306;
newYork = new State("New York",0,0,0,0,0,0);
stateList.push(newYork);
newYork.totalBeds = 54627;
newYork.icuBeds = 2967;
northCarolina = new State("North Carolina",0,0,0,0,0,0);
stateList.push(northCarolina);
northCarolina.totalBeds = 22535;
northCarolina.icuBeds = 1699;
northDakota = new State("North Dakota",0,0,0,0,0,0);
stateList.push(northDakota);
northDakota.totalBeds = 3232;
northDakota.icuBeds = 168;
ohio = new State("Ohio",0,0,0,0,0,0);
stateList.push(ohio);
ohio.totalBeds = 31161;
ohio.icuBeds = 2490;
oklahoma = new State("Oklahoma",0,0,0,0,0,0);
stateList.push(oklahoma);
oklahoma.totalBeds = 11455;
oklahoma.icuBeds = 840;
oregon = new State("Oregon",0,0,0,0,0,0);
stateList.push(oregon);
oregon.totalBeds = 6683;
oregon.icuBeds = 651;
pennsylvania = new State("Pennsylvania",0,0,0,0,0,0);
stateList.push(pennsylvania);
pennsylvania.totalBeds = 36022;
pennsylvania.icuBeds = 2433;
rhodeIsland = new State("Rhode Island",0,0,0,0,0,0);
stateList.push(rhodeIsland);
rhodeIsland.totalBeds = 2548;
rhodeIsland.icuBeds = 235;
southCarolina = new State("South Carolina",0,0,0,0,0,0);
stateList.push(southCarolina);
southCarolina.totalBeds = 12154;
southCarolina.icuBeds = 936;
southDakota = new State("South Dakota",0,0,0,0,0,0);
stateList.push(southDakota);
southDakota.totalBeds = 4273;
southDakota.icuBeds = 153;
tennessee = new State("Tennessee",0,0,0,0,0,0);
stateList.push(tennessee);
tennessee.totalBeds = 19034;
tennessee.icuBeds = 1534;
texas = new State("Texas",0,0,0,0,0,0);
stateList.push(texas);
texas.totalBeds = 61020;
texas.icuBeds = 5585;
utah = new State("Utah",0,0,0,0,0,0);
stateList.push(utah);
utah.totalBeds = 5115;
utah.icuBeds = 482;
vermont = new State("Vermont",0,0,0,0,0,0);
stateList.push(vermont);
vermont.totalBeds = 1046;
vermont.icuBeds = 88;
virginia = new State("Virginia",0,0,0,0,0,0);
stateList.push(virginia);
virginia.totalBeds = 18112;
virginia.icuBeds = 1383;
washington = new State("Washington",0,0,0,0,0,0);
stateList.push(washington);
washington.totalBeds = 11587;
washington.icuBeds = 1343;
westVirginia = new State("West Virginia",0,0,0,0,0,0);
stateList.push(westVirginia);
westVirginia.totalBeds = 6923;
westVirginia.icuBeds = 477;
wisconsin = new State("Wisconsin",0,0,0,0,0,0);
stateList.push(wisconsin);
wisconsin.totalBeds = 12799;
wisconsin.icuBeds = 1180;
wyoming = new State("Wyoming",0,0,0,0,0,0);
stateList.push(wyoming);
wyoming.totalBeds = 1953;
wyoming.icuBeds = 102;

for(let i = 0; i<50; i++){
    let r = 100 + Math.floor(Math.random() * 155);
    let g = 100 + Math.floor(Math.random() * 155);
    let b =  Math.floor(Math.random() * 200);
    stateList[i].setColors(r,g,b);
    stateList[i].setShortForm(stateShortForms[i]);
}

