import platter from './vidiveggies.jpg';

export default function () {
    const content = document.querySelector('#content');

    const frontPage = document.createElement('div');
    frontPage.classList.add('page-container');

    const titleHeader = document.createElement('h1');
    titleHeader.textContent = "Veggie Vidi Vicci";
    frontPage.appendChild(titleHeader);

    const vPlatter = new Image();
    vPlatter.src = platter;
    vPlatter.classList.add('image');
    frontPage.appendChild(vPlatter);

    const textLine = document.createElement('p');
    textLine.innerHTML = "At Veggie Vidi Vicci, we take pride in making dishes out of vegetables, and making them taste <em>good!</em>  Come try for yourself!";
    frontPage.appendChild(textLine);

    const hours = document.createElement('section');
    hours.classList.add('card');
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours';
    hours.appendChild(hoursHeader);
    
    const hoursInfo = document.createElement('div')
    hoursInfo.classList.add('info-container');

    const time = function (day, open) {
        const newDay = document.createElement('p');
        newDay.classList.add('day');
        newDay.textContent = `${day}`;
        const newTime = document.createElement('span');
        newTime.classList.add('time');
        newTime.textContent = `${open}`;
        newDay.appendChild(newTime);
        hoursInfo.appendChild(newDay);
    }

    time('Sunday', '8:30AM - 9:00PM');
    time('Monday', '9:00AM - 9:00PM');
    time('Tuesday', '9:00AM - 9:00PM');
    time('Wednesday', '9:00AM - 9:00PM');
    time('Thursday', '9:00AM - 9:00PM');
    time('Friday', '8:30AM - 9:30PM');
    time('Saturday', '8:30AM - 9:30PM');
    
    hours.appendChild(hoursInfo);
    frontPage.appendChild(hours);

    const location = document.createElement('section');
    location.classList.add('card');
    location.setAttribute('id', 'location-card');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = "Location";
    location.appendChild(locationHeader);

    const address = document.createElement('div');
    address.classList.add('info-container');
    address.innerHTML = "<p>1932 N Squash Ave</p><p>Aubergine, V8 51389</p>";
    location.appendChild(address);

    frontPage.appendChild(location);
    content.appendChild(frontPage);
};