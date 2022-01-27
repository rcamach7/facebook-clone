import { v4 as uuidv4 } from "uuid";
import cat from "../assets/cat.jpeg";
import elon from "../assets/elon.jpeg";
import ronaldo from "../assets/ronaldo.jpeg";
import dog from "../assets/dog.jpeg";
import dogTwo from "../assets/dogTwo.png";
import bob from "../assets/bob.jpeg";

const testPosts = [
  {
    postId: uuidv4(),
    userName: "John",
    icon: cat,
    timePosted: new Date("January 22, 2022 17:14:21"),
    postDescription:
      "did anyone catch the ufc  fights tonight?! that was a crazy knockout",
    likes: 0,
    comments: [
      {
        commentId: uuidv4(),
        userName: "Dana-White",
        icon: dog,
        comment: "i was there!!",
        likes: 2,
      },
      {
        commentId: uuidv4(),
        userName: "ronaldo7",
        icon: ronaldo,
        comment: "wait, there was a fight?!",
        likes: 0,
      },
    ],
  },
  {
    postId: uuidv4(),
    userName: "theRealElon",
    icon: elon,
    timePosted: new Date("January 23, 2022 13:15:30"),
    postDescription: "Just bought a new bike, it's a ninja 400!!!",
    likes: 0,
    comments: [
      {
        commentId: uuidv4(),
        userName: "ronaldo7",
        icon: ronaldo,
        comment: "dude that's awesome",
        likes: 0,
      },
      {
        commentId: uuidv4(),
        userName: "lennon",
        icon: dogTwo,
        comment: "sweet!!! ",
        likes: 0,
      },
      {
        commentId: uuidv4(),
        userName: "Joan",
        icon: bob,
        comment: "lets race 🏎!!!",
        likes: 0,
      },
    ],
  },
  {
    postId: uuidv4(),
    userName: "ronaldo7",
    icon: ronaldo,
    timePosted: new Date("January 25, 2022 13:15:30"),
    postDescription:
      "Kangaskhan protects its child by keeping it in its pouch. Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.!",
    likes: 2,
    comments: [
      {
        commentId: uuidv4(),
        userName: "theRealElon",
        icon: elon,
        comment: "what?",
        likes: 3,
      },
      {
        commentId: uuidv4(),
        userName: "lennon",
        icon: dogTwo,
        comment: "so inspirational 🥺 ",
        likes: 0,
      },
      {
        commentId: uuidv4(),
        userName: "Joan",
        icon: bob,
        comment: "lets race!!!",
        likes: 0,
      },
    ],
  },
];

export default testPosts;
