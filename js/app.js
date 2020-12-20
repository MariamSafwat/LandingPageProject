/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


const sections = document.querySelectorAll('section');

// build the nav
const fragment = document.createDocumentFragment();

for (section of sections){
	let secName = section.getAttribute('data-nav');
	// create new item in the nav bar list and adds the section name to it
	const newLi = document.createElement('li'); 
	newLi.classList.add('menu__link');
	// create a link and add it to the item
	const newLink = document.createElement('a');
	newLi.appendChild(newLink);

	const liText = document.createTextNode(secName);
	newLink.appendChild(liText);
	fragment.appendChild(newLi);
}
// add all items to the nav bar
const nav_bar_ul = document.getElementById('navbar__list');
nav_bar_ul.appendChild(fragment);


const nav_li_list = nav_bar_ul.getElementsByClassName('menu__link');


/*
for(linkk of links){
	linkk.addEventListener('click', function(){
		console.log(linkk.parentElement);

		document.removeEventListener('scroll', scrollingFunction);

		for (sect of sections){
			if (linkk.innerHTML == sect.getAttribute('data-nav') ) {
				console.log(linkk.parentElement);
				sect.scrollIntoView({ block: 'end',  behavior: 'smooth' });
			}
		}


	});
}
*/
//Select the active section while scrolling
document.addEventListener('scroll', scrolling =>{
	sections.forEach(section => {
		let sectionPosition = section.getBoundingClientRect();
		if(sectionPosition.top >= 0 && sectionPosition.top <= 150){
			// this section is at top so its active active
			// remove active class from other sections
			for (sec of sections){
				sec.classList.remove('your-active-class');
			}
			section.classList.add('your-active-class');
			// select the active section in the nav bar
			for (nav_li of nav_li_list){
				if (nav_li.textContent == section.getAttribute('data-nav')){
					//remove active class from other nav bar elements
					for (navliEL of nav_li_list){
						navliEL.classList.remove('active');
					}
					nav_li.classList.add('active'); 
				}
			}
		}
	})

} )


// scroll to section on link click
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event => {
    for (sect of sections){
			if (link.innerHTML == sect.getAttribute('data-nav') ) {
				sect.scrollIntoView({ block: 'end',  behavior: 'smooth' });
			}
		}

  })
})


/*
for(link of links){
	for(section of sections){
		if(link.parentElement.textContent == section.getAttribute('data-nav') ){
			link.setAttribute('href', '#'+ section.id);
		}
	}
}
*/



