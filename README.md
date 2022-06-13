## Facebook Clone

Facebook clone that allows user to make a post with text or pictures, and like posts or comments. Uses my custom [**social media api**](https://github.com/rcamach7/social-media-api) for the backend.

![Website Demo](demo.gif)

<div align="center">

[**Visit Facebook Clone**](https://rcamach7.github.io/facebook-clone/)

</div>

## Key Features

- UI built entirely with React. Made fully responsive with media breakpoints and CSS sizing functions.
- Utilizes react lifecycle methods, react hooks for state management, and custom hooks to serve specific application needs.
- Routing implemented with protected routes against un-authenticated users. Data validation and sanitation also performed client side before interacting with backend API.
- Uses my [**social media api**](https://github.com/rcamach7/social-media-api) for the backend to allow users to use my [**instant messaging app**](https://github.com/rcamach7/social-media-api) with the exact same credentials, carrying over all user data, like friends, messages, and posts.

#### Built Using

- functional components, custom hooks, useEffect, useState, useContext, axios, uuid, react-router-dom, sass, font awesome icon's, moment, HashRouter, localStorage, destructured props, ES6 features, AJAX.

#### Local Installation & Running

```bash
git clone https://github.com/rcamach7/facebook-clone.git
cd facebook-clone
npm install
npm run start
```

#### Pending Improvements

- replace right tab in homepage with a component displaying friends and other users using the application.
- update demo gif since there's been a lot of changes to app
- add ability to request friends in app.
