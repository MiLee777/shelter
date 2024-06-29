# Cozy House Shelter Website
This is a React-based website for the "Cozy House" shelter, providing information about the shelter, pets available for adoption, ways to help the shelter, and contact details. The website features a responsive design, a modal popup for pet details, and a hamburger menu for easy navigation on mobile devices.

## Live Demo

You can view the live demo of this project [here](https://milee777-cozy-house-shelter.netlify.app/).

## Technologies Used

- **React:** Built using the React library for the frontend components.
- **JavaScript:** Utilized for logic and interactivity.
- **HTML & CSS:** Structured and styled the web pages.

## Installation
``
git clone https://github.com/yourusername/cozy-house-shelter.git
``

``
cd cozy-house-shelter
``

``
npm install
``

## Usage
To start the development server, run: 
`` npm start ``

This will launch the website on http://localhost:3000.

## Components
### Home
Displays the homepage with a welcoming message and a call to action to view available pets.

### AboutTheShelter
Provides information about the "Cozy House" shelter, including the number of animals and staff details.

### OurPets
Displays a carousel of pets available for adoption. Clicking on a pet shows a modal with more details.

### HelpTheShelter
Lists ways to help the shelter, such as donating or volunteering.

### Contacts
Shows the contact details of the shelter, including email, phone number, and physical addresses.

### Routes
The application uses React Router for navigation. The following routes are available:

- **/:** Home component
- **/about:** AboutTheShelter component
- **/pets:** OurPets component
- **/help:** HelpTheShelter component
- **/contact:** Contacts component

### Data
#### Pets
Pet data is stored in data/pets.js. Each pet object includes:

- **id:** Unique identifier
- **name:** Name of the pet
- **image:** Image URL of the pet

#### HelpItems
Help items data is stored in data/help.js. Each item object includes:

- **title:** Title of the help item
- **image:** Image URL of the help item

### Assets
All images and icons used in the project are stored in the assets directory.

- **assets/image/:** Contains images used in various components.
- **assets/image/icons/:** Contains icons used in the navigation and other UI elements.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.