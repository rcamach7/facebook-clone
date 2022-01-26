import cat from "../assets/cat.jpeg";
import elon from "../assets/elon.jpeg";
import ronaldo from "../assets/ronaldo.jpeg";
import dog from "../assets/dog.jpeg";
import dogTwo from "../assets/dogTwo.png";
import bob from "../assets/bob.jpeg";

const testPosts = [
  {
    userName: "John",
    icon: cat,
    timePosted: new Date("January 22, 2022 17:14:21"),
    postDescription:
      "did anyone catch the ufc  fights tonight?! that was a crazy knockout",
    comments: [
      {
        userName: "Dana-White",
        icon: dog,
        comment: "i was there!!",
      },
      {
        userName: "lennon",
        icon: dogTwo,
        comment: "yeah mate!!!",
      },
      {
        userName: "ronaldo7",
        icon: ronaldo,
        comment: "wait, there was a fight?!",
      },
    ],
  },
  {
    userName: "theRealRicardo",
    icon: elon,
    timePosted: new Date("January 23, 2022 13:15:30"),
    postDescription: "Just bought a new bike, it's a ninja 400!!!",
    likedBy: ["My Mother", "Robert", "Joan Artiga"],
    comments: [
      {
        userName: "ronaldo7",
        icon: ronaldo,
        comment: "dude that's awesome",
      },
      {
        userName: "lennon",
        icon: dogTwo,
        comment: "sweet!!! 🙌",
      },
      {
        userName: "Joan",
        icon: bob,
        comment: "lets race 🏎!!!",
      },
    ],
  },
];

export default testPosts;
