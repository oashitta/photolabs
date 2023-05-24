# react-photolabs

---

This PhotoLabs project is a react project and was part of the Lighthouse Labs web development course. It is a single page application that renders photos along with the information of the user who uploaded the photo.

The app enables the rendering of photos in groups according to their categories/topics and fetches relevant photos from an api.

The project uses several aspects of react such as components, useEffect, useState, useReducer and hooks and has been a great way of learning how the use of the react library in frontend and backend development.

## App Interface

!["screenshot of homepage"]()
!["screenshot of modal"]()

## Using the App & Featured

1. Modal opens on click of a photo.
2. Photos can be liked/unliked in any view (homepage or modal).
3. Notification appears in nav bar when a photo is liked.
4. On click of a link in the nav bar, the app filters the photos and only renders photos in that category.
5. Clicking on the Photolabs logo refreshes the page.

## Setup

Install dependencies with `npm install` in each folder `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

Go to <http://localhost:3000/> in your browser.

## [Backend] Running Backend Server

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

---

#### Frontend Dependencies

- "@testing-library/jest-dom": "^5.16.5"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-scripts": "5.0.1"
- "web-vitals": "^2.1.4"

#### Backend Dependencies

- "body-parser": "^1.18.3"
- "cors": "^2.8.5"
- "dotenv": "^7.0.0"
- "express": "^4.16.4"
- "helmet": "^3.18.0"
- "pg": "^8.5.0"
- "socket.io": "^2.2.0"
- "ws": "^7.0.0"
