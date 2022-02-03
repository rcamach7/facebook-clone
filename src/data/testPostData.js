import { v4 as uuidv4 } from "uuid";
import cat from "../assets/cat.jpeg";
import elon from "../assets/elon.jpeg";
import ronaldo from "../assets/ronaldo.jpeg";
import dogTwo from "../assets/dogTwo.png";
import bob from "../assets/bob.jpeg";
import text from "../assets/text.png";

const testPosts = [
  {
    userId: "jIqGkHYQWSXsE2lPNIj6tbgB1jF3",
    postId: uuidv4(),
    userName: "theRealElon",
    icon: elon,
    timePosted: new Date("January 23, 2022 13:15:30"),
    postDescription:
      "Cat walks in keyboard try to jump onto window and fall while scratching at wall for poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls but stare at guinea pigs poop on couch.!",
    picture: null,
    likes: [],
    comments: [
      {
        commentId: uuidv4(),
        userName: "ronaldo7",
        icon: ronaldo,
        comment: "dude that's awesome",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "lennon",
        icon: dogTwo,
        comment: "so inspirational 🥺",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "Joan",
        icon: bob,
        comment:
          "The door is opening! how exciting oh, it's you, meh meowzer yet roll over and sun my belly i shall purr myself to sleep. !",
        likes: [],
      },
    ],
  },
  {
    userId: "40b53af3-3403-4d20-8e12-985f107135da",
    postId: uuidv4(),
    userName: "ronaldo7",
    icon: ronaldo,
    timePosted: new Date("January 25, 2022 13:15:30"),
    postDescription: "/r/programmingHumor omg 😂😂😂",
    picture: text,
    likes: [],
    comments: [
      {
        commentId: uuidv4(),
        userName: "theRealElon",
        icon: elon,
        comment:
          "The War of the 5 kings. The Knight of Lemonwood. Words are like wind. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. Never Resting.",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "lennon",
        icon: dogTwo,
        comment: "lol",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "Joan",
        icon: bob,
        comment:
          "Carrot cake jelly jelly-o brownie jelly-o danish croissant. Shortbread gingerbread ice cream muffin pastry.!!!",
        likes: [],
      },
    ],
  },
  {
    userId: "15372103-c6f5-4cf8-b8f5-52d2e776ed6e",
    postId: uuidv4(),
    userName: "Al Pawcino",
    icon: cat,
    timePosted: new Date("January 28, 2022 09:14:21"),
    postDescription: "drop a comment if you come from the odin project 🙌",
    picture: null,
    likes: [],
    comments: [],
  },
];

export default testPosts;
