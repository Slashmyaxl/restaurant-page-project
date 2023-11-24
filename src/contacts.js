export default function() {
    const content = document.getElementById('content');

    const contactPage = document.createElement('div');
    contactPage.classList.add('page-container');

    const addNewContact = function(name, title, phone, email) {
        const contactCard = document.createElement('section');
        contactCard.classList.add('card');

        const contactName = document.createElement('h2');
        contactName.textContent = `${name}`;
        contactCard.appendChild(contactName);

        const contactInfo = document.createElement('div')
        contactInfo.classList.add('info-container');

        const contactTitle = document.createElement('h3');
        contactTitle.textContent = `${title}`;
        contactInfo.appendChild(contactTitle);

        const contactPhone = document.createElement('p');
        contactPhone.textContent = `Phone: ${phone}`;
        contactInfo.appendChild(contactPhone);

        const contactEmail = document.createElement('p');
        contactEmail.textContent = `Email: ${email}`;
        contactInfo.appendChild(contactEmail);

        contactCard.appendChild(contactInfo);

        contactPage.appendChild(contactCard);
    }

    addNewContact('Tomato Slice', 'Veg Boss', '(VEG)-872-8181', 'slice@vvv.org');

    addNewContact('Banana Peel', 'Opener', '(VEG)-872-8184', 'peely@vvv.org');

    addNewContact('Olivia Tree', 'Floor Manager', '(VEG)-872-8183', 'olivet@vvv.org');

    content.appendChild(contactPage);
}