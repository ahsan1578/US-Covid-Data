
/**
 * @param title title for plot
 * @param caseData day by day cumulative total cases in the state, type array
 * @param dailyCaseData day by day new cases in the state, type array
 * @param days number of days
 * @param indexFirstDay used to find index in data that holds first case
 * @param max max for y-axis
 * @param data holds data
 * 
 */


function drawPlots(){
  let title;
  let days = [];
  let indexFirstDay = 0;
  let max;
  let data;
  
  if(dailyCases === false){
    data = selectedState.caseData;
    title = "Total Cases";
  }
  else{
    data = selectedState.dailyCaseData;
    title = "Total Daily New Cases";
  }
  
  if(dailyCases === false){
    max = Math.max((selectedState.totalBeds*1.1), (Math.max.apply(null,data)*1.1));
  }
  else{
    max = Math.max.apply(null,data)*1.1;
  }
  
  
  for(i = 0; i < data.length; i++){
    if(data[i] === 0){
    indexFirstDay++;
    }
    else{
      break;
    }
  }
  
  data = data.slice(indexFirstDay, data.length);

   for(let i = 0; i< data.length;i++){
      days[i] = i + 1;
  }
  
 
//plots graph
  let grph = new Graph('xy');
  grph.xLabel("Days", [0,-8]);
  grph.yLabel("Number of Cases", [-0.03*windowWidth, 0]);
  grph.title(title, [0, 20]);


  grph.addPoints([days, data], 'lists', [255,255,255]);

  grph.xInterv(10);
  grph.yInterv(Math.floor(max * 0.08));
  grph.axis(0, days.length, 0, max);

  if(!dailyCases) {
    grph.addFunc(function (x) {
      return selectedState.totalBeds
    }, color = 'YELLOW');
    grph.addFunc(function (x) {
      return selectedState.icuBeds
    }, color = 'RED');
  }
  
  grph.backgroundCol([61,68,94]);
  grph.drawGridLines(true);
  
  grph.canvasLocation(windowWidth*0.05, windowHeight*0.05, windowWidth*0.65, windowHeight*0.8);
  grph.show();


  let len = 0;
  if(!dailyCases){
    len = selectedState.caseData.length;
  }else{
    len = selectedState.dailyCaseData.length;
  }
  let startDate = new Date(2020,0,22+len-data.length);
  let endDate = new Date(2020,0,22+len-1);
  console.log(startDate);
  console.log(endDate);
  fill(255);
  noStroke();
  textSize(13);
  text("From "+getDateString(startDate)+" to "+ getDateString(endDate), windowWidth*0.5, windowHeight*0.05+20);
  if(!dailyCases) {
    text("Total Hospital beds in "+selectedState.name, windowWidth*0.5+25, windowHeight*0.05+38);
    text("Total ICU beds in "+selectedState.name, windowWidth*0.5+25, windowHeight*0.05+53);
    stroke(255, 255, 0);
    strokeWeight(2);
    line(windowWidth * 0.5, windowHeight * 0.05 + 35, windowWidth * 0.5 + 20, windowHeight * 0.05 + 35);
    stroke(255, 0, 0);
    line(windowWidth * 0.5, windowHeight * 0.05 + 50, windowWidth * 0.5 + 20, windowHeight * 0.05 + 50);
  }
}

