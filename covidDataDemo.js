/**
 * @author D M Raisul Ahsan
 * @version 1.0
 */

let day = 1;
let month = "January";
let year = 2020;
let allStates = true;
let overAllStates = false;
let overEachState = false;
let overSelectAll = false;
let overUnselectAll = false;
let onPlay = false;
let overPlayButton = false;
let totalDeaths = false;
let dailyCases = false;
let overC = false;
let overD = false;
let selectedState = null;
let alabama, alaska, arizona, arkansas, california, colorado, connecticut, delaware, florida, georgiA, hawaii, idaho,
illinois, indiana, iowa, kansas, kentucky, louisiana, maine, maryland, massachusetts, michigan, minnesota, mississippi,
missouri, montana, nebraska, nevada, newHampshire, newJersey, newMexico, newYork, northCarolina, northDakota, ohio,
oklahoma, oregon, pennsylvania, rhodeIsland, southCarolina, southDakota, tennessee, texas, utah, vermont, virginia,
washington, westVirginia, wisconsin, wyoming;

let stateList = [];


function setup() {
   
    createCanvas(windowWidth, windowHeight);
    background(61,68,94);
    frameRate(1);
    
    
}

var onetimeCall = true;

function draw() {
if(onetimeCall){
    if(parsingTheJSONFile()){
    
    background(61,68,94);
    cursor(ARROW);
    drawPlotRect();
    sideBarGeneric();
    drawAllStatesSideBar();
    if(allStates) {
        drawAllStateCasesSel();
        
    }else {
        drawIndivSatesCase();
       
    }

    //onetimeCall =false;
    
}
} else{
    background(61,68,94);
    cursor(ARROW);
    drawPlotRect();
    sideBarGeneric();
    drawAllStatesSideBar();
    if(allStates) {
        drawAllStateCasesSel();
    }else {
        drawIndivSatesCase();
    }
}
}

function drawPlotRect() {
    let xStart = windowWidth * 0.05;
    let yStart = windowHeight * 0.05;
    let xEnd = windowWidth*.65;
    let yEnd = windowHeight*0.8;
    let width = xEnd - xStart;
    let height = yEnd - yStart;
    stroke(157, 189, 242);
    strokeWeight(2.5);
    noFill();
    rect(xStart, yStart , width, height );
    let xInterval = width/10;
    let yInterval = height/10;
    strokeWeight(0.1);
    stroke(157, 189, 242, 120);
    for(let i = 1; i<=10; i++){
        line(xStart + i*xInterval, yStart, xStart+i*xInterval, yEnd);
    }
    for(let i = 1; i<=10; i++){
        line(xStart, yStart+i*yInterval, xEnd, yStart+ i*yInterval);
    }
}


function sideBarGeneric() {
    let xStart = windowWidth * 0.7;
    let width = windowWidth - xStart;
    let height = windowHeight/20;
    textSize(windowWidth*windowHeight/70000);
    stroke(157, 189, 242);
    strokeWeight(2.5);
    line(xStart, 0, xStart, windowHeight);
    strokeWeight(1);
    if(allStates) {
        fill(157, 189, 242);
    }else {
        fill(255, 255, 255);
    }
    rect(xStart, 0, width / 2, height);
    if(!allStates) {
        fill(157, 189, 242);
    }else {
        fill(255, 255, 255);
    }
    rect(xStart + width/2, 0 , width/2, height);
    if(mouseX >= xStart && mouseX <= xStart + width/2 && mouseY >= 0 && mouseY <= height){
        fill(0,0,255);
        rect(xStart, 0, width / 2, height);
        overAllStates = true;
        cursor(HAND);
    }else {
        overAllStates = false;
    }
    if(mouseX >= xStart + width/2 && mouseX <= windowWidth  && mouseY >= 0 && mouseY <= height){
        fill(0,0,255);
        rect(xStart + width/2, 0 , width/2, height);
        overEachState = true;
        cursor(HAND);
    }else {
        overEachState = false;
    }
    noStroke();
    fill(6, 32, 74);
    text("All states data", xStart+width*0.1, height*0.65);
    text("Individual data", xStart+width/2+width*0.1, height*0.65);
}

function drawAllStatesSideBar() {
    

    let xStart = windowWidth * 0.7;
    let width = windowWidth - xStart;
    let top = windowHeight/20;
    let bottom = windowHeight * 0.8;
    let height = bottom - top;
    let yInterval = height / 25;
    let xInterval = width/2;
    for(let i = 0; i< 25; i++){
        stateList[i].stateButtonDraw(xStart + 0.1 * width, top + 0.1 *height + (i- 1)* yInterval,
            0.4*width, yInterval, width*height/20000);
    }
    for(let i = 25; i< 50; i++){
        stateList[i].stateButtonDraw(xStart + xInterval, top + 0.1 *height + (i- 26)* yInterval,
            0.4*width, yInterval, width*height/20000);
    }
}

function drawAllStateCasesSel(){
    let xStart = windowWidth * 0.7;
    let width = windowWidth - xStart;
    let top = windowHeight/20;
    let bottom = windowHeight * 0.9;
    let height = bottom - top;
    stroke(61,68,94);
    strokeWeight(2);
    if(overSelectAll){
        fill(0,0,255);
    }else {
        fill(157, 189, 242);
    }
    rect (xStart + 0.2*width, top+ height*0.98, width*0.3, height/25);
    if(overUnselectAll){
        fill(0,0,255);
    }else {
        fill(157, 189, 242);
    }
    rect (xStart + 0.5*width, top+ height*0.98, width*0.3, height/25);
    fill(6, 32, 74);
    noStroke();
    textSize(width*height/25000);
    text("Select all", xStart + 0.27 * width, top + height*1.0057);
    text("Unselect all", xStart + 0.57 * width, top + height*1.0057);
    if(mouseX>xStart + 0.2 * width && mouseX < xStart +  width * 0.5 &&
        mouseY > top+ height*0.98 && mouseY < top+ height*0.98 + height / 25){
        overSelectAll = true;
        cursor(HAND);
    }else {
        overSelectAll = false;
    }
    if(mouseX>xStart + 0.5 * width && mouseX < xStart +  width * 0.8 &&
        mouseY > top+ height*0.98 && mouseY < top+ height*0.98 + height / 25){
        overUnselectAll = true;
        cursor(HAND);
    }else {
        overUnselectAll = false;
    }
    stroke(191, 211, 245);
    strokeWeight(5);
    ellipse(windowWidth * 0.07, windowHeight* 0.85, windowWidth*0.04, windowWidth*0.04);
    fill(191, 211, 245);
    if(!onPlay) {
        triangle(windowWidth * 0.065, windowHeight * 0.83, windowWidth * 0.065,
            windowHeight * 0.87, windowWidth * 0.08, windowHeight * 0.85);
    }else {
        line(windowWidth * 0.065, windowHeight* 0.83, windowWidth * 0.065, windowHeight* 0.87);
        line(windowWidth * 0.075, windowHeight* 0.83, windowWidth * 0.075, windowHeight* 0.87);
    }
    if(dist(windowWidth * 0.07, windowHeight* 0.85, mouseX, mouseY) <= (windowWidth * 0.04)){
        overPlayButton = true;
        cursor(HAND);
    }else{
        overPlayButton = false;
    }
    noStroke();
    fill(112, 163, 250);
    textSize(windowWidth*windowHeight/50000);
    text(month+" "+day + ", "+year, windowWidth * 0.27, windowHeight* 0.855);
    if(overC){
        fill(0,0,255);
    }else if(!totalDeaths){
        fill(112, 163, 250);
    }else {
        fill(255);
    }
    rect(windowWidth*0.22 , windowHeight*0.885, windowWidth*0.13, windowHeight/25);
    if(overD){
        fill(0,0,255);
    }else if(totalDeaths){
        fill(112, 163, 250);
    }else {
        fill(255);
    }
    rect(windowWidth*0.35 , windowHeight*0.885, windowWidth*0.13, windowHeight/25);
    noStroke();
    fill(6, 32, 74);
    textSize(windowWidth*windowHeight/70000);
    text("Total cases", windowWidth*0.25 , windowHeight*0.914);
    text("Total deaths", windowWidth*0.38 , windowHeight*0.914);
    if(mouseX>windowWidth*0.22 && mouseX < windowWidth*0.35 &&
        mouseY > windowHeight*0.885 && mouseY < windowHeight*0.885 + windowHeight/25 ){
        overC = true;
        cursor(HAND);
    }else{
        overC = false;
    }
    if(mouseX>windowWidth*0.35 && mouseX < windowWidth*0.48 &&
        mouseY > windowHeight*0.885 && mouseY < windowHeight*0.885 + windowHeight/25 ){
        overD = true;
        cursor(HAND);
    }else{
        overD = false;
    }
}

function drawIndivSatesCase() {
    
    noStroke();
    fill(112, 163, 250);
    textSize(windowWidth*windowHeight/50000);
    if(selectedState == null){
        text("Select a state", windowWidth * 0.3, windowHeight* 0.855);
    }else {
        text(selectedState.name, windowWidth * 0.30, windowHeight* 0.855);
    }
    if(overC){
        fill(0,0,255);
    }else if(!dailyCases){
        fill(112, 163, 250);
    }else {
        fill(255);
    }
    rect(windowWidth*0.22 , windowHeight*0.885, windowWidth*0.13, windowHeight/25);
    if(overD){
        fill(0,0,255);
    }else if(dailyCases){
        fill(112, 163, 250);
    }else {
        fill(255);
    }
    rect(windowWidth*0.35 , windowHeight*0.885, windowWidth*0.13, windowHeight/25);
    noStroke();
    fill(6, 32, 74);
    textSize(windowWidth*windowHeight/70000);
    text("Total cases", windowWidth*0.25 , windowHeight*0.914);
    text("Daily cases", windowWidth*0.38 , windowHeight*0.914);
    if(mouseX>windowWidth*0.22 && mouseX < windowWidth*0.35 &&
        mouseY > windowHeight*0.885 && mouseY < windowHeight*0.885 + windowHeight/25 ){
        overC = true;
        cursor(HAND);
    }else{
        overC = false;
    }
    if(mouseX>windowWidth*0.35 && mouseX < windowWidth*0.48 &&
        mouseY > windowHeight*0.885 && mouseY < windowHeight*0.885 + windowHeight/25 ){
        overD = true;
        cursor(HAND);
    }else{
        overD = false;
    }
}

function mouseClicked() {
    if(overAllStates){
        for (let i = 0; i<50; i++){
            stateList[i].isSelected = true;
        }
        allStates = true;
    }
    if(overEachState){
        allStates = false;
        onPlay = false;
        selectedState = null;
    }
    if(allStates){
        for (let i = 0; i<50; i++){
            stateList[i].changeSelection();
            if(overSelectAll){
                stateList[i].isSelected = true;
            }
            if(overUnselectAll){
                stateList[i].isSelected = false;
            }
        }
        if(overPlayButton){
            onPlay = !onPlay;
        }
        if(overC){
            totalDeaths = false;
        }
        if(overD){
            totalDeaths = true;
        }
    }else {
        for (let i = 0; i<50; i++){
            stateList[i].changeSelectionIndiv();
        }
        if(overC){
            dailyCases = false;
        }
        if(overD){
            dailyCases = true;
        }
    }
}

var State = function (name, totalCaseData, totalDeathData, dailyCases, r, g, b) {
    this.name = name;
    this.caseData = totalCaseData;
    this.deathData = totalDeathData;
    this.timeline = dailyCases;
    this.isSelected = true;
    this.r = r;
    this.g = g;
    this.b = b;
    this.underMouse = false;
}



//totalcases:will have zero until we get the first case by states


var dataGlobal = [];

function parsingTheJSONFile(stateCodeString){
    

    const url = "https://covidtracking.com/api/v1/states/daily.json"
    fetch(url)
    .then(function(response){
      //console.log(response.status);
      return response.json()
    })
    .then(function(data){
        console.log(data);
        dataGlobal = data;
fetchTotalCase("AL");
alabama = new State("Alabama",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(alabama);

fetchTotalCase("AK");
alaska = new State("Alaska",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(alaska);

fetchTotalCase("AZ");
arizona = new State("Arizona",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(arizona);

fetchTotalCase("AR");
arkansas = new State("Arkansas",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(arkansas);

fetchTotalCase("CA");
california = new State("California",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(california);

fetchTotalCase("CO");
colorado = new State("Colorado",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(colorado);

fetchTotalCase("CT");
connecticut = new State("Connecticut",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(connecticut);

fetchTotalCase("DE");
delaware = new State("Delaware",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(delaware);

fetchTotalCase("FL");
florida = new State("Florida",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(florida);

fetchTotalCase("GA");
georgiA = new State("Georgia",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(georgiA);

fetchTotalCase("HI");
hawaii = new State("Hawaii",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(hawaii);

fetchTotalCase("ID");
idaho = new State("Idaho",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(idaho);

fetchTotalCase("IL");
illinois = new State("Illinois",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(illinois);

fetchTotalCase("IN");
indiana = new State("Indiana",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(indiana);

fetchTotalCase("IA");
iowa = new State("Iowa",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(iowa);

fetchTotalCase("KS");
kansas = new State("Kansas",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(kansas);

fetchTotalCase("KY");
kentucky = new State("Kentucky",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(kentucky);

fetchTotalCase("LA");
louisiana = new State("Louisiana",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(louisiana);

fetchTotalCase("ME");
maine = new State("Maine",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(maine);

fetchTotalCase("MD");
maryland = new State("Maryland",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(maryland);

fetchTotalCase("MA");
massachusetts = new State("Massachusetts",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(massachusetts);

fetchTotalCase("MI");
michigan = new State("Michigan",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(michigan);

fetchTotalCase("MN");
minnesota = new State("Minnesota",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(minnesota);

fetchTotalCase("MS");
mississippi = new State("Mississippi",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(mississippi);

fetchTotalCase("MO");
missouri = new State("Missouri",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(missouri);

fetchTotalCase("MT");
montana = new State("Montana",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(montana);

fetchTotalCase("NE");
nebraska = new State("Nebraska",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(nebraska);

fetchTotalCase("NV");
nevada = new State("Nevada",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(nevada);

fetchTotalCase("NH");
newHampshire = new State("New Hampshire",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(newHampshire);

fetchTotalCase("NJ");
newJersey = new State("New Jersey",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(newJersey);

fetchTotalCase("NM");
newMexico = new State("New Mexico",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(newMexico);

fetchTotalCase("NY");
newYork = new State("New York",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(newYork);

fetchTotalCase("NC");
northCarolina = new State("North Carolina",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(northCarolina);

fetchTotalCase("ND");
northDakota = new State("North Dakota",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(northDakota);

fetchTotalCase("OH");
ohio = new State("Ohio",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(ohio);

fetchTotalCase("OK");
oklahoma = new State("Oklahoma",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(oklahoma);

fetchTotalCase("OR");
oregon = new State("Oregon",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(oregon);

fetchTotalCase("PA");
pennsylvania = new State("Pennsylvania",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(pennsylvania);

fetchTotalCase("RI");
rhodeIsland = new State("Rhode Island",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(rhodeIsland);

fetchTotalCase("SC");
southCarolina = new State("South Carolina",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(southCarolina);

fetchTotalCase("SD");
southDakota = new State("South Dakota",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(southDakota);

fetchTotalCase("TN");
tennessee = new State("Tennessee",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(tennessee);

fetchTotalCase("TX");
texas = new State("Texas",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(texas);

fetchTotalCase("UT");
utah = new State("Utah",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(utah);

fetchTotalCase("VT");
vermont = new State("Vermont",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(vermont);

fetchTotalCase("VA");
virginia = new State("Virginia",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(virginia);

fetchTotalCase("WA");
washington = new State("Washington",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(washington);

fetchTotalCase("WV");
westVirginia = new State("West Virginia",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(westVirginia);

fetchTotalCase("WI");
wisconsin = new State("Wisconsin",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(wisconsin);

fetchTotalCase("WY");
wyoming = new State("Wyoming",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
stateList.push(wyoming);




    //    var lengthData =data.length;
       

    //    firstDate = data[lengthData -1].date;
    //    var found = false;
    //    counter = 0;
    //    for(let i = lengthData - 1; i>=0; i--){

    //        if(data[i].state === stateCodeString){
    //            totalCaseByState[counter] =  data[i].positive;
    //            totalDeathByState[counter] = data[i].death;
    //            dailyCaseByState[counter] = data[i].positiveIncrease;
    //            found = true;
    //        }

    //        if(!found){
    //         totalCaseByState[counter] =  0;
    //         totalDeathByState[counter] = 0;
    //         dailyCaseByState[counter] = 0;
    //        }
    //        if(data[i].date != firstDate){
    //            firstDate = data[i].date;
    //            counter++;
    //        }
    //    }
    //    console.log(totalCaseByState);
    //    console.log(stateCodeString);
    })
    .then(function(response){
    //console.log(response.status);
       onetimeCall=false;
      })
    
}

function changeboolean(){

}
var totalCaseByState = null;
var totalDeathByState = null;
var dailyCaseByState = null;

function fetchTotalCase(stateCodeString){
    var lengthData =dataGlobal.length;

       firstDate = dataGlobal[lengthData -1].date;
       var found = false;
       counter = 0;
       totalCaseByState = new Array(95);
    totalDeathByState = new Array(95);
    dailyCaseByState = new Array(95);

           for(let i = lengthData - 1; i>=0; i--){

           if(dataGlobal[i].state === stateCodeString){
               totalCaseByState[counter] =  dataGlobal[i].positive;
               totalDeathByState[counter] = dataGlobal[i].death;
               dailyCaseByState[counter] = dataGlobal[i].positiveIncrease;
               found = true;
           }

           if(!found){
            totalCaseByState[counter] =  0;
            totalDeathByState[counter] = 0;
            dailyCaseByState[counter] = 0;
           }
           if(dataGlobal[i].date != firstDate){
               firstDate = dataGlobal[i].date;
               counter++;
           }
       }
       
    }


var totalDeathData = [];




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

// let alabama, alaska, arizona, arkansas, california, colorado, connecticut, delaware, florida, georgiA, hawaii, idaho,
// illinois, indiana, iowa, kansas, kentucky, louisiana, maine, maryland, massachusetts, michigan, minnesota, mississippi,
// missouri, montana, nebraska, nevada, newHampshire, newJersey, newMexico, newYork, northCarolina, northDakota, ohio,
// oklahoma, oregon, pennsylvania, rhodeIsland, southCarolina, southDakota, tennessee, texas, utah, vermont, virginia,
// washington, westVirginia, wisconsin, wyoming;

// let stateList = [];


// fetchTotalCase("AL");
// alabama = new State("Alabama",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(alabama);

// fetchTotalCase("AK");
// alaska = new State("Alaska",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(alaska);

// fetchTotalCase("AZ");
// arizona = new State("Arizona",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(arizona);

// fetchTotalCase("AR");
// arkansas = new State("Arkansas",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(arkansas);

// fetchTotalCase("CA");
// california = new State("California",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(california);

// fetchTotalCase("CO");
// colorado = new State("Colorado",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(colorado);

// fetchTotalCase("CT");
// connecticut = new State("Connecticut",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(connecticut);

// fetchTotalCase("DE");
// delaware = new State("Delaware",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(delaware);

// fetchTotalCase("FL");
// florida = new State("Florida",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(florida);

// fetchTotalCase("GA");
// georgiA = new State("Georgia",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(georgiA);

// fetchTotalCase("HI");
// hawaii = new State("Hawaii",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(hawaii);

// fetchTotalCase("ID");
// idaho = new State("Idaho",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(idaho);

// fetchTotalCase("IL");
// illinois = new State("Illinois",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(illinois);

// fetchTotalCase("IN");
// indiana = new State("Indiana",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(indiana);

// fetchTotalCase("IA");
// iowa = new State("Iowa",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(iowa);

// fetchTotalCase("KS");
// kansas = new State("Kansas",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(kansas);

// fetchTotalCase("KY");
// kentucky = new State("Kentucky",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(kentucky);

// fetchTotalCase("LA");
// louisiana = new State("Louisiana",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(louisiana);

// fetchTotalCase("ME");
// maine = new State("Maine",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(maine);

// fetchTotalCase("MD");
// maryland = new State("Maryland",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(maryland);

// fetchTotalCase("MA");
// massachusetts = new State("Massachusetts",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(massachusetts);

// fetchTotalCase("MI");
// michigan = new State("Michigan",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(michigan);

// fetchTotalCase("MN");
// minnesota = new State("Minnesota",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(minnesota);

// fetchTotalCase("MS");
// mississippi = new State("Mississippi",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(mississippi);

// fetchTotalCase("MO");
// missouri = new State("Missouri",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(missouri);

// fetchTotalCase("MT");
// montana = new State("Montana",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(montana);

// fetchTotalCase("NE");
// nebraska = new State("Nebraska",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(nebraska);

// fetchTotalCase("NV");
// nevada = new State("Nevada",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(nevada);

// fetchTotalCase("NH");
// newHampshire = new State("New Hampshire",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(newHampshire);

// fetchTotalCase("NJ");
// newJersey = new State("New Jersey",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(newJersey);

// fetchTotalCase("NM");
// newMexico = new State("New Mexico",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(newMexico);

// fetchTotalCase("NY");
// newYork = new State("New York",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(newYork);

// fetchTotalCase("NC");
// northCarolina = new State("North Carolina",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(northCarolina);

// fetchTotalCase("ND");
// northDakota = new State("North Dakota",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(northDakota);

// fetchTotalCase("OH");
// ohio = new State("Ohio",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(ohio);

// fetchTotalCase("OK");
// oklahoma = new State("Oklahoma",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(oklahoma);

// fetchTotalCase("OR");
// oregon = new State("Oregon",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(oregon);

// fetchTotalCase("PA");
// pennsylvania = new State("Pennsylvania",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(pennsylvania);

// fetchTotalCase("RI");
// rhodeIsland = new State("Rhode Island",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(rhodeIsland);

// fetchTotalCase("SC");
// southCarolina = new State("South Carolina",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(southCarolina);

// fetchTotalCase("SD");
// southDakota = new State("South Dakota",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(southDakota);

// fetchTotalCase("TN");
// tennessee = new State("Tennessee",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(tennessee);

// fetchTotalCase("TX");
// texas = new State("Texas",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(texas);

// fetchTotalCase("UT");
// utah = new State("Utah",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(utah);

// fetchTotalCase("VT");
// vermont = new State("Vermont",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(vermont);

// fetchTotalCase("VA");
// virginia = new State("Virginia",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(virginia);

// fetchTotalCase("WA");
// washington = new State("Washington",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(washington);

// fetchTotalCase("WV");
// westVirginia = new State("West Virginia",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(westVirginia);

// fetchTotalCase("WI");
// wisconsin = new State("Wisconsin",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(wisconsin);

// fetchTotalCase("WY");
// wyoming = new State("Wyoming",totalCaseByState,totalDeathByState,dailyCaseByState,0,0,0);
// stateList.push(wyoming);

// console.log("hellow");
// console.log(washington.caseData[5]);

