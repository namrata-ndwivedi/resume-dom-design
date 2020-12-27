//Achievements section starts
let achievementSection = createElement('div');
appendChild(leftSideSection, achievementSection);

let achievementsIcon = createElement('img');
setAttribute(achievementsIcon, 'src', 'achievement.png');
setAttribute(achievementsIcon, 'class', 'icon-style');
appendChild(achievementSection, achievementsIcon);

let achievementsHeader = createElement('span');
setAttribute(achievementsHeader, 'class', 'header-style');
achievementsHeader.innerText = ' Achievements';
appendChild(achievementSection, achievementsHeader);

achUl = createElement('ul');

li1 = createElement('li');
li1.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(achUl, li1);

li2 = createElement('li');
li2.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(achUl, li2);

li3 = createElement('li');
li3.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(achUl, li3);

li4 = createElement('li');
li4.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus.";
appendChild(achUl, li4);

li5 = createElement('li');
li5.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus error. Dolorum cupiditate eum quis quasi error voluptate? Facilis expedita quam, laudantium possimus ex ab repellat quasi? Veniam, possimus voluptatibus..";
appendChild(achUl, li5);

appendChild(achievementSection, achUl);
