![CreatedBy](https://img.shields.io/static/v1?label=Created%20by&message=Julien%20MARCEL&color&style=flat)
![BuiltWith](https://img.shields.io/static/v1?label=Built%20with&message=React_v17.0.2&color=blue&style=flat&logo=createreactapp)

# SportSee : Track your training within a centralized interface
SportSee is an all integrated fitness tracking app which displays all your main indicators into one single dashboard.
![ScreenShot](https://github.com/jujunantes/JulienMarcel_12_28022022/raw/master/src/medias/SportSeeCapture.png)

## 1. Prerequisites
In order to get this project running you'll first need to make sure that the following packages are installed on your computer :
- NodeJS [(version 12.18 or newer)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- Optionnaly, if you need to read or edit this project's files, you'll need to use a good text editor like [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/). This project was developped using the excellent IDE [Visual Code](https://code.visualstudio.com/).

This project also uses the following dependencies, but they'll get installed automatically later on (see part #3) :
- react-router and react-router-dom: [v6.2.1](https://reactrouter.com/)
- react-bootstrap: [v5.1.3](https://react-bootstrap.github.io/)
- recharts: [v2.1.9](https://recharts.org/en-US/)
- prop-types: [v15.8.1](https://www.npmjs.com/package/prop-types)

## 2. Installing the backend
SportSee makes use of a REST API that you first need to install. In order to do so:
- download the sources from [its github repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).
- then, in a console, enter the following commands :
```sh
cd <Your Path>\P9-front-end-dashboard-master
yarn
yarn dev
```
The REST API will then get served locally on your computer at port 3000.
As mentioned on its project page, this API possesses four endpoints that we will be able to use:
- http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
- http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
- http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

## 3. Installing SportSee
SportSee's installation is traightforward :
- download the sources from [its github repository](https://github.com/jujunantes/JulienMarcel_12_28022022).
- then, in a console, enter the following commands :
```sh
cd <Your Path>\JulienMarcel_12_28022022-master
yarn
yarn start
```

Alternatively, you can enter the following commands :
```sh
cd <Your Path>\JulienMarcel_12_28022022-master
npm install
npm run start
```

## 4. using SportSee
SportSee will fetch users' data from the REST API and display them using verious charts.
For demo purpose, you can switch from one user to the other by clicking on the white container of the page.