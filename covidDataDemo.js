/**
 * @author D M Raisul Ahsan
 * @version 1.0
 */

const firstDay = new Date(2020,0,22);
let currDay = new Date(2020,0,22);
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
let plotXZero = 0;
let plotYZero = 0;
let plotWidth = 0;
let plotHeight = 0;
let xScale = 0;
let yScale = 0;
let countUp = 0;
let notYetPlayed = true;
let isMaxK = false;
let isOnPlot = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(61,68,94);
    frameRate(8);
}

function draw() {
    background(61,68,94);
    cursor(ARROW);
    sideBarGeneric();
    drawPlotRect();
    drawAllStatesSideBar();
    if(allStates) {
        drawAllStateCasesSel();
        if(!notYetPlayed){
            let type = "";
            let len = 0;
            if(totalDeaths){
                type = "death";
                len = stateList[0].deathData.length-1;
            }else {
                type = "case";
                len = stateList[0].caseData.length-1;
            }
            animatePlot(type);
            if(onPlay && countUp < len) {
                countUp++;
                currDay.setDate(currDay.getDate()+1);
            }else if(countUp >= len){
                isMaxK = true;
                onPlay = false;
            }
        }
    }else {
        drawIndivSatesCase();
    }
}

function  animatePlot(type) {
    setScale(type);
    for(let i = 0; i<50; i++){
        if(stateList[i].isSelected){
            stateList[i].drawAnimatedPlot(countUp, plotXZero, plotYZero, xScale,yScale, type);
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
    plotXZero = xStart;
    plotYZero = yEnd;
    plotWidth = width;
    plotHeight = height;
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
    if(mouseX >= xStart && mouseX <= xEnd && mouseY >= yStart && mouseY <= yEnd){
        isOnPlot = true;
        if(allStates) {
            textSize(15);
            fill(255);
            noStroke();
            let xVal = Math.floor(((mouseX - xStart) / xScale) + 1);
            let yVal = Math.floor(((height + yStart) - mouseY) / yScale);
            let date = new Date(2020, 0, 22 + xVal - 1);
            if (xVal !== Infinity && yVal !== Infinity) {
                text(getDateString(date) + ",  " + yVal, mouseX , mouseY);
            }
        }
    }else {
        isOnPlot = false;
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
    text(getDateString(currDay), windowWidth * 0.27, windowHeight* 0.855);
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
        countUp = 0;
        currDay.setDate(firstDay.getDate());
        currDay.setMonth(firstDay.getMonth());
        currDay.setFullYear(firstDay.getFullYear());
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
            notYetPlayed = false;
            if(!onPlay && isMaxK){
                countUp = 0;
                currDay.setDate(firstDay.getDate());
                currDay.setMonth(firstDay.getMonth());
                currDay.setFullYear(firstDay.getFullYear());
                isMaxK = false;
            }
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
    if(isOnPlot){
        countUp = Math.floor(((mouseX- plotXZero)/xScale));
        if(countUp <0 || countUp === Infinity || isNaN(countUp)){
            countUp = 0;
        }else if(countUp > stateList[0].caseData.length-1){
            countUp = stateList[0].caseData.length-1;
        }
        currDay.setDate(firstDay.getDate());
        currDay.setMonth(firstDay.getMonth());
        currDay.setFullYear(firstDay.getFullYear());
        currDay.setDate(currDay.getDate()+countUp);
    }
}

function getMax(type){
    let xMax = 0;
    if(type === "case") {
        xMax = stateList[0].caseData.length;
    }else {
        xMax = stateList[0].deathData.length;
    }
    let yMax = 0;
    for(let i = 0; i<50 ; i++){
        if(stateList[i].isSelected){
            if(type === "case"){
                let m = stateList[i].caseData[xMax - 1];
                if(m>yMax){
                    yMax = m;
                }
            }else if(type === "death"){
                let m = stateList[i].deathData[xMax - 1];
                if(m>yMax){
                    yMax = m;
                }
            }
        }
    }
    return [xMax, yMax];
}

function setScale(type) {
    xScale = (plotWidth/getMax(type)[0]) ;
    yScale = (plotHeight/getMax(type)[1]) ;
}

function getDateString(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let stringMonth = "";
    switch (month) {
        case 0:
            stringMonth = "January";
            break;
        case 1:
            stringMonth = "February";
            break;
        case 2:
            stringMonth = "March";
            break;
        case 3:
            stringMonth = "April";
            break;
        case 4:
            stringMonth = "May";
            break;
        case 5:
            stringMonth = "June";
            break;
        case 6:
            stringMonth = "July";
            break;
        case 7:
            stringMonth = "August";
            break;
        case 8:
            stringMonth = "September";
            break;
        case 9:
            stringMonth = "October";
            break;
        case 10:
            stringMonth = "November";
            break;
        case 11:
            stringMonth = "December";
            break;
    }
    return stringMonth+" "+day+", "+year;
}
