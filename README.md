## Facebook Clone

Facebook clone built primarily using React. Allows user to make a post with text and/or pictures, like posts or comments, and stores this information in a real time database.

![Website Demo](https://res.cloudinary.com/de2ymful4/image/upload/v1651355683/facebook/assets/facebookDemo_blvyh7.gif)

<div align="center">

[**visit facebook clone**](https://rcamach7.github.io/facebook-clone/)

</div>

## Key Features

- Allows users to make a post with text and/or pictures, and ability to like posts or comments.
- User interface built with React. Made fully responsive with media breakpoints and CSS sizing functions.
- Firebase used for user creation and authentication, along with storing user data in a NoSQL database.

#### Technologies Used

- React:
  - functional components
  - custom hooks used for fetching and managing state data
  - utilized useEffect, useState, useContext, and useRef
  - user authentications managed by JWT tokens and routes protected against un-authenticated users
- libraries used:
  - axios, uuid, react-router-dom, sass, font awesome icon's, moment

#### Local Installation & Running

```bash
git clone https://github.com/rcamach7/facebook-clone.git
cd facebook-clone
npm install
npm run start
```

#### Pending Improvements

- Upon user creation, assign random profile icon pictures, so there's difference between all new users.
- "Messages" tab, that will link users to my messenger application.
- replace right tab in homepage with a component displaying friends and other users using the application.
- whenever user uploads an image when creating a post, show the image in the create a post form. Right now it's just being stored in the background.
- Raise the backdrop for profile image in our profile page.
- Change default profile image for users
