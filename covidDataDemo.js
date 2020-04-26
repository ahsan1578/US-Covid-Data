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


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(61,68,94);
}

function draw() {
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

var State = function (name, caseData, deathData, timeline, r, g, b) {
    this.name = name;
    this.caseData = caseData;
    this.deathData = deathData;
    this.timeline = timeline;
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

let alabama, alaska, arizona, arkansas, california, colorado, connecticut, delaware, florida, georgiA, hawaii, idaho,
illinois, indiana, iowa, kansas, kentucky, louisiana, maine, maryland, massachusetts, michigan, minnesota, mississippi,
missouri, montana, nebraska, nevada, newHampshire, newJersey, newMexico, newYork, northCarolina, northDakota, ohio,
oklahoma, oregon, pennsylvania, rhodeIsland, southCarolina, southDakota, tennessee, texas, utah, vermont, virginia,
washington, westVirginia, wisconsin, wyoming;

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
