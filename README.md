## Facebook Clone

Facebook clone built primarily using React. Allows user to make a post with text and/or pictures, like posts or comments, and stores this information in a real time database.

![Website Demo](demo.gif)

<div align="center">

[**visit facebook clone**](https://rcamach7.github.io/facebook-clone/)

</div>

## Key Features

- Allows users to create posts with text and pictures, add comments to existing posts, and interact with them by liking posts or comments.
- UI built with React. Made fully responsive with media breakpoints and CSS sizing functions.
- Utilizes react lifecycle methods, react hooks for state management, and custom hooks to serve specific application needs.
- Client side routing implemented with protected routes against un-authenticated users. Data validation and sanitation also performed client side before interacting with backend API.

<details>
  <summary>...more app features</summary>
  <li>axios interceptors to configure headers upon any API interaction</li>
  <li>user authentication managed by JWT tokens</li>
  <li>multi form data for managing api requests that involve images</li>
  <li>functional components</li>
</details>

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
