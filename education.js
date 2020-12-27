let educationSection = createElement('div');
appendChild(rightSideSection, educationSection);

let educationIcon = createElement('img');
setAttribute(educationIcon, 'src', 'education.png');
setAttribute(educationIcon, 'class', 'icon-style');
appendChild(educationSection, educationIcon);

let educationHeader = createElement('span');
setAttribute(educationHeader, 'class', 'header-style');
educationHeader.innerText = ' Achievements';
appendChild(educationSection, educationHeader);

//table details
let table1 = createElement('table');
appendChild(educationSection, table1);

let thead1 = createElement('thead');
setAttribute(thead1, 'class', 'thead');
thead1.innerText = 'Educational Details'
appendChild(table1, thead1);

//1st row
let tr1 = createElement('tr');
appendChild(table1, tr1);

let th1 = createElement('th');
th1.innerText = 'Degree of Specialisation';
appendChild(tr1, th1);
let th2 = createElement('th');
th2.innerText = '   University';
appendChild(tr1, th2);
let th3 = createElement('th');
th3.innerText = '   Percentage';
appendChild(tr1, th3);

//2nd row
let tr2 = createElement('tr');
appendChild(table1, tr2);

let td11 = createElement('td');
td11.innerText = 'MSc Tech'
appendChild(tr2, td11); 
let td12 = createElement('td');
td12.innerText = 'SPPU'
appendChild(tr2, td12); 
let td13 = createElement('td');
td13.innerText = '80%'
appendChild(tr2, td13); 

//3rd row
let tr3 = createElement('tr');
appendChild(table1, tr3);

let td21 = createElement('td');
td21.innerText = 'BSc Maths'
appendChild(tr3, td21); 
let td22 = createElement('td');
td22.innerText = 'SPPU'
appendChild(tr3, td22); 
let td23 = createElement('td');
td23.innerText = '85%'
appendChild(tr3, td23); 

//4th row
let tr4 = createElement('tr');
appendChild(table1, tr4);

let td31 = createElement('td');
td31.innerText = '12th (Science Stream)';
appendChild(tr4, td31); 
let td32 = createElement('td');
td32.innerText = 'HSC (Maharashtra)';
appendChild(tr4, td32); 
let td33 = createElement('td');
td33.innerText = '87%';
appendChild(tr4, td33); 

let para1 = createElement('p');
para1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus unde ullam reprehenderit illum consequatur, est ut sunt soluta natus odit porro nesciunt minima! Illum facilis aspernatur expedita excepturi ab? Qui voluptatibus unde ullam reprehenderit illum consequatur, est ut sunt soluta natus odit porro nesciunt minima! Illum facilis aspernatur expedita excepturi ab?';
appendChild(educationSection, para1);

let para2 = createElement('p');
para2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus unde ullam reprehenderit illum consequatur, est ut sunt soluta natus odit porro nesciunt minima! Illum facilis aspernatur expedita excepturi ab? Qui voluptatibus unde ullam reprehenderit illum consequatur, est ut sunt soluta natus odit porro nesciunt minima! Illum facilis aspernatur expedita excepturi ab?';
appendChild(educationSection, para2);