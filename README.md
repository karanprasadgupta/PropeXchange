# PropeXchange

PropeXchange is a secure Full Stack web application tailored for property transactions. It ensures advanced user authentication, data protection, and a streamlined user experience for engaging in real estate transactions.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Features
- **User Authentication:** Advanced security measures including 2FA and encryption protocols.
- **User Engagement:** Optimized transaction processes for real estate properties.
- **Data Protection:** Prioritizes data protection and privacy.
- **User-Friendly Interface:** Intuitive design for a seamless user experience.

## Technologies Used
- **Frontend:** ReactJS, MUI components
- **Backend:** NodeJS, ExpressJS
- **Database:** MySQL
- **Server:** Apache
- **Version Control:** Git

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/karanprasadgupta/PropeXchange.git
    ```
2. Navigate to the project directory:
    ```bash
    cd PropeXchange
    ```
3. Install frontend dependencies:
    ```bash
    cd html/client
    npm install
    ```
4. Install backend dependencies:
    ```bash
    cd ../../api
    npm install
    ```
5. Set up the database:
    - Create a MySQL database and change the configuration in [`sequelize.js`](https://github.com/karanprasadgupta/PropeXchange/blob/main/api/sequelize.js).

6. Configure environment variables:
    - Create a `.env` file in the `backend` directory and add your database configuration and other necessary environment variables.

7. Run the application:
    - Start the backend server:
        ```bash
        cd api
        npm start
        ```
    - Start the frontend server:
        ```bash
        cd ../html/client
        npm start
        ```

## Usage
- Open your web browser and navigate to `http://localhost:3000` to access the application.
- Sign up or log in to your account.
- Browse available properties, make transactions, and manage your profile.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or feedback, feel free to reach out:
- **Karan Prasad Gupta**
  - [Email](mailto:kpgupta3201@gmail.com)
  - [LinkedIn](https://linkedin.com/in/karanprasadgupta/)

>This project was developed for learning purposes as part of the CSE345-Foundations of Computer Security, Monsoon 2023 semester, Project at IIITD under the supervision of [Prof. Arun Balaji Buduru](https://www.iiitd.ac.in/arunb).
