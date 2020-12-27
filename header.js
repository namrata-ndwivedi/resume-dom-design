let mainDiv = createElement('div');
setAttribute(mainDiv, 'class', 'main-box');
append(mainDiv);

let bg1 = createElement('div');
let img = createElement('img');

setAttribute(bg1, 'class', 'gray-ornament');
setAttribute(img, 'src', '71.jpg');
setAttribute(img,'class','avatar');
appendChild(bg1, img);
appendChild(mainDiv, bg1);

let bg2 = createElement('div');
let personName = createElement('div');

personName.innerText = 'Namrata Dwivedi';
setAttribute(bg2, 'class', 'white-ornament');
setAttribute(personName, 'class', 'person-name');
appendChild(bg2, personName);
appendChild(mainDiv, bg2);

let bg3 = createElement('div');
setAttribute(bg3, 'class', 'bg3');
appendChild(mainDiv, bg3);

let details = createElement('div');
setAttribute(details, 'class', 'details');
appendChild(mainDiv, details);

let address = createElement('span');
address.innerText = '603/15 Premlok Park, Pune-411033   |   '
appendChild(details, address);

let mobileNo = createElement('span');
mobileNo.innerText = '9922518947    |   ';
appendChild(details, mobileNo);

let mailId = createElement('span');
mailId.innerText = 'namrata.ndwivedi@gmail.com  |   '
appendChild(details, mailId);

let linkedInId = createElement('span');
linkedInId.innerText = 'https://www.linkedin.com/in/namrata-d-00aa51147/    |   '
appendChild(details, linkedInId);

let hr = createElement('hr');
setAttribute(hr, 'color', 'gray');
appendChild(mainDiv,hr);

//reusable functions
function createElement(elementName){
     return document.createElement(elementName);
}

function append(elementName){
    return document.body.append(elementName);
}

function appendChild(elementName, child){
    return elementName.appendChild(child);
}

function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
  }

