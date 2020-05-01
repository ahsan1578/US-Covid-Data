# US Covid Data  

[US-Covid-Data](http://www.unm.edu/~ahsan1578/covidData.html)

---

**D M Raisul Ahsan**  
**Bethany Pena**  
**Sandesh Timilsina**  

---

*US Covid Data* is a web application that shows the trends of increase of total cases,  
total deaths and daily cases of 50 states. The application helps people to compare  
between two or more states and understand the difference in growth of cases. 

---

#### Features

* Animate the increase of total cases and total deaths of the multiple states.  
* Ability to visually compare data of multiple states at any given day from  
January 22nd, 2020 (the day US found its first case).
* Visually inspect total number of cases of an individual state and compare the  
number with the state's medical capacity.
* Plot of the of daily new cases of a state.   

---

#### How to Use the Application

* The application has two major modes: 1. All states data, 2: Individual state data  
* All states data creates plots of multiple states simultaneously. The plots can be  
genrated and animated using the play button at the bottom left corner of the plot.  
* Initially all states are selected. Use the "unselect all" button to unselect the  
the states. Click on the state's name to select a state. Use "select all" button to  
select all the states. 
* Once the desired states are selected clicking on the play button will generate  
the plot. You can select or unselect a state even when the animation is running.  
* We suggest selecting no more than 5 states at a time to get a better  
visualization. Also the plots are scaled according to the highest value of total  
cases in the list of selected states. That means, if you choose NY and NM together  
the trendline of NM will be close to x-axis as NY has about 100 times more cases  
than NM.
* You can toggle between total cases and total deaths clicking on the two buttons  
under the plot box.  
* Clicking on any point on the plot will bring the plot back to the date associated  
with the point.
* Clicking on the "individual data" at the top right corner will change the mode to  
individual state data. In this mode, only one state's data will be shown.
* Select a states clicking on the state's name. Initially New Mexico is the selected  
state. Toggle between total cases and total daily clicking on the two buttons  
under the plot box.

---

#### Few Shortcomings
* For individual state plots, you can't click on a point on the trendline to see  
the data associated with at that point. We will add this feature in next version.  
* The API we are using to retrieve the data contains few wrong data (very rare)  
 for daily cases. However, data for the total cases and total deaths is fine.  

---

![][Res/1.png]
![][Res/2.png]
![][Res/3.png]
![][Res/4.png]
![][Res/5.png]