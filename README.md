## Facebook Clone

Facebook clone that allows user to make a post with text or pictures, and like posts or comments. Uses my custom [**social media api**](https://github.com/rcamach7/social-media-api) for the backend.

<div align="center">

[**Visit Facebook Clone**](https://rcamach7.github.io/facebook-clone/)

</div>

![Website Demo](facebook_demo.gif)

## Key Features

- UI built entirely with React. Made fully responsive with media breakpoints and CSS sizing functions.
- Utilizes Redux for state management, react lifecycle methods, and custom hooks to manage application features.
- Implemented protected routes against un-authenticated users. Data validation and sanitation also performed client side before interacting with backend API.
- Uses my [**social media api**](https://github.com/rcamach7/social-media-api) for the backend to allow users to use my [**instant messaging app**](https://github.com/rcamach7/social-media-api) with the exact same credentials, carrying over all user data, like friends, messages, and posts.

#### Built Using

<p align="center">
  <img src="https://res.cloudinary.com/de2ymful4/image/upload/v1648514838/main-portfolio/animated-logos/react-anim_jqtsxo.gif" width="40" height="40" alt="React" />
  <img src="https://res.cloudinary.com/de2ymful4/image/upload/v1656116643/main-portfolio/tech-skills/redux_rbbutz.png" width="40" height="40" alt="Redux" />
  <img src="https://res.cloudinary.com/de2ymful4/image/upload/v1648514837/main-portfolio/animated-logos/js-anim_pxxk0j.gif" width="40" height="40" alt="Javascript" />
  <img src="https://res.cloudinary.com/de2ymful4/image/upload/v1648515099/main-portfolio/animated-logos/sass-animated_lhind3.gif" width="30" height="35" alt="SASS" />
  <img src="https://res.cloudinary.com/de2ymful4/image/upload/v1646099328/main-portfolio/tech-skills/html_qpxonu.png" width="40" height="40" alt="Javascript" />
</p>

- dispatchers, reducers, redux store, functional components, custom hooks, useEffect, useState, useContext, axios, uuid, react-router-dom, sass, font awesome icon's, moment, HashRouter, localStorage, destructured props, ES6 features, AJAX.

#### Local Installation & Running

```bash
git clone https://github.com/rcamach7/facebook-clone.git
cd facebook-clone
npm install
npm run start
```

#### Pending Improvements

- replace right tab in homepage with a component displaying friends and other users using the application.
- Create a full page loading UI so that its more clear data is still being fetched for the user.
- Add more icons on the navbar so it looks closer to the original facebook navbar.
