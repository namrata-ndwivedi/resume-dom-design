let leftSideSection = createElement('div');
setAttribute(leftSideSection,'class','section');
setAttribute(leftSideSection, 'class', 'left-side-section');
appendChild(mainDiv, leftSideSection);

let profileSection = createElement('div');
setAttribute(profileSection,'class', 'profile-section');
appendChild(leftSideSection, profileSection);

// profile header
let profile = createElement('div');
appendChild(profileSection, profile);

let profileIcon = createElement('img');
setAttribute(profileIcon, 'src', 'profile-user.png');
setAttribute(profileIcon,'class','icon-style');
appendChild(profile, profileIcon);

let profileHeader = createElement('span');
setAttribute(profileHeader,'class','header-style');
profileHeader.innerText = " Profile";
appendChild(profile, profileHeader);

let profileContent = createElement('span');
setAttribute(profileContent, 'class','content');
profileContent.innerText = 'Focused and skilful Frontend Developer. Developed numerous applications. A firm believer in building various competencies- to get exposure and increase networking-  along with work.'
appendChild(profile, profileContent);

let br = createElement('br');
appendChild(profileSection, br);