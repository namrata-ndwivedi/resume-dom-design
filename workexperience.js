let rightSideSection = createElement('div');
setAttribute(rightSideSection,'class','section');
setAttribute(rightSideSection, 'class', 'right-side-section');
appendChild(mainDiv, rightSideSection);

let workExperienceSection = createElement('div');
setAttribute(workExperienceSection,'class', 'profile-section');
appendChild(rightSideSection, workExperienceSection);

// profile header
let work = createElement('div');
appendChild(workExperienceSection, work);

let workIcon = createElement('img');
setAttribute(workIcon, 'src', 'workex.png');
setAttribute(workIcon,'class','icon-style');
appendChild(work, workIcon);

let workHeader = createElement('span');
setAttribute(workHeader,'class','header-style');
workHeader.innerText = " Work Experience";
appendChild(work, workHeader);

exUl = createElement('ul');

list1 = createElement('li');
list1.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(exUl, list1);

list2 = createElement('li');
list2.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(exUl, list2);

list3 = createElement('li');
list3.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(exUl, list3);

list4 = createElement('li');
list4.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(exUl, list4);

list5 = createElement('li');
list5.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus..";
appendChild(exUl, list5);

appendChild(work, exUl);
