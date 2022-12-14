(function () {
	'use strict';
	console.log('reading js: filters');

	const ruinsLink = document.getElementById('ruinslink');
	const pompeiiLink = document.getElementById('pompeiilink');
	const sorrentoLink = document.getElementById('sorrentolink');
	const positanoLink = document.getElementById('positanolink');
	const florenceLink = document.getElementById('florencelink');
	const vaticanLink = document.getElementById('vaticanlink');
	const romaLink = document.getElementById('romalink');
	const excLink = document.getElementById('exclink');
	const kewLink = document.getElementById('kewlink');
	const intLink = document.getElementById('intlink');
	const thamesLink = document.getElementById('thameslink');
	const londonLink = document.getElementById('londonlink');
	const mendoLink = document.getElementById('mendolink');
	const greenLink = document.getElementById('greenlink');
	const wareLink = document.getElementById('warelink');
	const lightLink = document.getElementById('lightlink');
	const famLink = document.getElementById('famlink');

	const ruinsP = document.getElementById('ruinsp');
	const pompeiiP = document.getElementById('pompeiip');
	const sorrentoP = document.getElementById('sorrentop');
	const positanoP = document.getElementById('positanop');
	const florenceP = document.getElementById('florencep');
	const vaticanP = document.getElementById('vaticanp');
	const romaP = document.getElementById('romap');
	const excP = document.getElementById('excp');
	const kewP = document.getElementById('kewp');
	const intP = document.getElementById('intp');
	const thamesP = document.getElementById('thamesp');
	const londonP = document.getElementById('londonp');
	const mendoP = document.getElementById('mendop');
	const greenP = document.getElementById('greenp');
	const wareP = document.getElementById('warep');
	const lightP = document.getElementById('lightp');
	const famP = document.getElementById('famp');

	const linkList = [
		ruinsLink,
		pompeiiLink,
		sorrentoLink,
		positanoLink,
		florenceLink,
		vaticanLink,
		romaLink,
		excLink,
		kewLink,
		intLink,
		thamesLink,
		londonLink,
		mendoLink,
		greenLink,
		wareLink,
		lightLink,
		famLink,
	];

	const pList = [
		ruinsP,
		pompeiiP,
		sorrentoP,
		positanoP,
		florenceP,
		vaticanP,
		romaP,
		excP,
		kewP,
		intP,
		thamesP,
		londonP,
		mendoP,
		greenP,
		wareP,
		lightP,
		famP,
	];

	let downCounter = 0;

	for (let i = 0; i < linkList.length; i++) {
		// console.log(linkList[i]);
		linkList[i].addEventListener('mouseover', function () {
			pList[i].style.opacity = '100%';
		});
	}

	for (let i = 0; i < linkList.length; i++) {
		// console.log(linkList[i]);
		linkList[i].addEventListener('mouseout', function () {
			pList[i].style.opacity = '0';
		});
	}

	document.querySelector('.fa-angle-down').addEventListener('click', function () {
		if (downCounter == 0) {
			// document.querySelector('.fa-angle-up').style.opacity = '100%';
			downCounter += 1;
			console.log(`counter = ${downCounter}`);
			document.getElementById('exclink').scrollIntoView({ behavior: 'smooth' });
		} else if (downCounter == 1) {
			downCounter += 1;
			console.log(`counter = ${downCounter}`);
			document.getElementById('thameslink').scrollIntoView({ behavior: 'smooth' });
		} else if (downCounter == 2) {
			downCounter += 1;
			console.log(`counter = ${downCounter}`);
			document.getElementById('famlink').scrollIntoView({ behavior: 'smooth' });
		} else {
			downCounter = 0;
			console.log(`counter = ${downCounter}`);
			document.getElementById('positanolink').scrollIntoView({ behavior: 'smooth' });
		}
	});

	document.querySelector('.fa-angle-up').addEventListener('click', function () {
		if (downCounter == 0) {
			downCounter = 3;
			console.log(`counter = ${downCounter}`);
			document.getElementById('famlink').scrollIntoView({ behavior: 'smooth' });
		} else if (downCounter == 1) {
			downCounter = 0;
			console.log(`counter = ${downCounter}`);
			document.getElementById('positanolink').scrollIntoView({ behavior: 'smooth' });
		} else if (downCounter == 2) {
			downCounter = 1;
			console.log(`counter = ${downCounter}`);
			document.getElementById('exclink').scrollIntoView({ behavior: 'smooth' });
		} else {
			downCounter = 2;
			console.log(`counter = ${downCounter}`);
			document.getElementById('pompeiilink').scrollIntoView({ behavior: 'smooth' });
		}
	});
})();
