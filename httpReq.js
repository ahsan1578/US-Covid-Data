/**
 * @author D M Raisul Ahsan & Sandesh Timilsina
 * @version 1.0
 */


/**
 * Retrieves data from covidtracking API using fetch request
 * and set the data to appropriate states
 *By D M Raisul Ahsan
 */
const  api_url = 'https://covidtracking.com/api/v1/states/daily.json';
let dataGlobal = null;
async  function getData() {
    const response = await fetch(api_url);
    dataGlobal = await response.json();
    await dataGlobal;
    for (let i = 0; i<50; i++){
        let dataArr = fetchTotalCase(stateShortForms[i]);
        stateList[i].setStateData(dataArr[0], dataArr[1], dataArr[2]);
    }
}
getData();


/**
 * Parse the jason file in usable arrays
 * @param stateCodeString - States short form
 * @returns {[][][]} 3 arrays holding state total cases, deaths and daily cases
 * by D M Raisul Ahsan & Sandesh Timilsina
 */
function fetchTotalCase(stateCodeString) {
    let totalCaseByState = [];
    let totalDeathByState = [];
    let dailyCaseByState = [];

    let lengthData = dataGlobal.length;
    let firstDate = dataGlobal[lengthData - 1].date;
    let currDate = firstDate;
    let found = false;
    let counter = lengthData - 1;
    while (counter >= 0 && dataGlobal[counter].date === currDate) {
        if (dataGlobal[counter].state === stateCodeString) {
            if (dataGlobal[counter].positive === undefined) {
                totalCaseByState.push(0);
            } else {
                totalCaseByState.push(dataGlobal[counter].positive);
            }
            if (dataGlobal[counter].death === undefined) {
                totalDeathByState.push(0);
            } else {
                totalDeathByState.push(dataGlobal[counter].death);
            }
            if (dataGlobal[counter].positiveIncrease === undefined) {
                dailyCaseByState.push(0);
            } else {
                dailyCaseByState.push(dataGlobal[counter].positiveIncrease);
            }
            while (counter >= 0 && dataGlobal[counter].date === currDate) {
                counter--;
            }
            counter++;
            found = true;
        }
        counter--;
        if (!found && dataGlobal[counter].date !== currDate) {
            totalCaseByState.push(0);
            totalDeathByState.push(0);
            dailyCaseByState.push(0);
        }
        if(counter >=0) {
            currDate = dataGlobal[counter].date;
        }
        found = false;
    }
    return [totalCaseByState, totalDeathByState, dailyCaseByState];
}
