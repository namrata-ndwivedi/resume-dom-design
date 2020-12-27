let skillsSection = createElement('div');
appendChild(leftSideSection, skillsSection);

let skills = createElement('div');
appendChild(skillsSection, skills);

let skillIcon = createElement('img');
setAttribute(skillIcon,'src','skill.png')
setAttribute(skillIcon,'class','icon-style');
appendChild(skills, skillIcon);

let skillHeader = createElement('span');
skillHeader.innerText = '   Skills';
setAttribute(skillHeader, 'class', 'header-style');
appendChild(skills, skillHeader);

let skillContent = createElement('div');
appendChild(skills, skillContent);

//Technical Skills
let techSkillHeader = createElement('h4');
setAttribute(techSkillHeader, 'class', 'skill-header');
techSkillHeader.innerText = 'Technical Skills';
appendChild(skillContent, techSkillHeader)

let techSkillSection = createElement('div');
setAttribute(techSkillSection,'class','skill-section');
appendChild(skillContent, techSkillSection);

//ratings start
let js = createElement('div');
js.innerText = 'Javascript';
appendChild(techSkillSection, js);

let css = createElement('div');
css.innerText = 'CSS';
appendChild(techSkillSection,css);

let html = createElement('div');
html.innerText = 'HTML';
appendChild(techSkillSection,html);

let react = createElement('div');
react.innerText = 'React Framework';
appendChild(techSkillSection, react);

//ratings slider
let techSlider = createElement('div');
setAttribute(techSlider,'class','skill-section');
appendChild(skillContent, techSlider);

let jsR = createElement('input');
setAttribute(jsR,'type','range');
setAttribute(jsR, 'value', '70');
setAttribute(jsR, 'disabled', 'true');
appendChild(techSlider, jsR);

let cssR = createElement('input');
setAttribute(cssR, 'type', 'range');
setAttribute(cssR, 'value', '80');
setAttribute(cssR,'disabled','true');
appendChild(techSlider, cssR);

let htmlR = createElement('input');
setAttribute(htmlR, 'type','range');
setAttribute(htmlR, 'value','50');
setAttribute(htmlR, 'disabled', 'true');
appendChild(techSlider, htmlR);

let reactR = createElement('input');
setAttribute(reactR, 'type', 'range');
setAttribute(reactR, 'value', '65');
setAttribute(reactR, 'disabled', 'true');
appendChild(techSlider, reactR);

//Analytical Skills
let analyticSkillHeader = createElement('div');
setAttribute(analyticSkillHeader, 'class', 'skill-header');
analyticSkillHeader.innerText = 'Analytical Skills'
appendChild(skillContent, analyticSkillHeader);

let analyticSkillSection = createElement('div');
setAttribute(analyticSkillSection, 'class', 'skill-section');
appendChild(skillContent, analyticSkillSection);

//analystics skills starts
let pm = createElement('div');
pm.innerText = 'Project Management';
appendChild(analyticSkillSection, pm);

let rt = createElement('div');
rt.innerText = 'Recruitment';
appendChild(analyticSkillSection, rt);

let bd = createElement('div');
bd.innerText='Business Development';
appendChild(analyticSkillSection, bd);

//range
let analyticsSlider = createElement('div');
setAttribute(analyticsSlider, 'class','skill-section');
appendChild(skillContent, analyticsSlider);

let pmR = createElement('input');
setAttribute(pmR,'type', 'range');
setAttribute(pmR, 'value', '60');
setAttribute(pmR, 'disabled', 'true');
appendChild(analyticsSlider, pmR);

let rtR = createElement('input');
setAttribute(rtR, 'type', 'range');
setAttribute(rtR, 'value', '40');
setAttribute(rtR, 'disabled', 'true');
appendChild(analyticsSlider, rtR);

let bdR = createElement('input');
setAttribute(bdR, 'type', 'range');
setAttribute(bdR, 'value', '80');
setAttribute(bdR, 'disabled','true');
appendChild(analyticsSlider, bdR);
