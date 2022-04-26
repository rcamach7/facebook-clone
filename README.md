# Facebook-Clone

An interactive, full stack, facebook clone built primarily using React. Allows user to make a post with text and/or pictures, like posts or comments, and stores this information in a real time database.

### Live Version:

[Live Website](https://rcamach7.github.io/facebook-clone/)

![Website Demo](facebookDemo.gif)

### Built Using:

- [React Framework](https://reactjs.org/)
  - component routing
  - useEffect, useRef, useState hooks
  - efficient state management
- [Firebase BAAS](https://firebase.google.com/)
  - Document Queries
  - Document creation and modification based on user interactivity
- [Moment JS](https://momentjs.com/)
  - Date Object Manipulation
- [Font Awesome Icons](https://fontawesome.com/)
- Javascript
- HTML
  - From Validation
  - Consistent Semantic Elements
- SASS Styling
- CSS
  - Variables
  - Media Queries

#### Local Installation & Running

```bash
git clone https://github.com/rcamach7/facebook-clone.git
cd facebook-clone
npm install
npm run start
```

#### Improvements To Be Implemented

- Add ability for server to accept images with new posts, and use cloudinary to store and query these images.
- Add dropdown on post that allows users to delete post (if they are the author)

UI Improvements

- Fix status bar overflowing whenever visiting on a iPhone SE viewport size.
- Implement Profile Page UI
- Upon user creation, assign random profile icon pictures, so there's difference between all new users.
