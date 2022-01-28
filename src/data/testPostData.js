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
    userName: "theRealElon",
    icon: elon,
    timePosted: new Date("January 23, 2022 13:15:30"),
    postDescription:
      "Cat walks in keyboard try to jump onto window and fall while scratching at wall for poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls but stare at guinea pigs poop on couch.!",
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
        comment:
          "The door is opening! how exciting oh, it's you, meh meowzer yet roll over and sun my belly i shall purr myself to sleep. !",
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
      "Kitty power catch eat throw up catch eat throw up bad birds snuggles up to shoulders or knees and purrs you to sleep for purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table howl on top of tall thing purr when being pet.",
    likes: 2,
    comments: [
      {
        commentId: uuidv4(),
        userName: "theRealElon",
        icon: elon,
        comment:
          "The War of the 5 kings. The Knight of Lemonwood. Words are like wind. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. Never Resting.",
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
        comment:
          "Carrot cake jelly jelly-o brownie jelly-o danish croissant. Shortbread gingerbread ice cream muffin pastry.!!!",
        likes: 0,
      },
    ],
  },
  {
    postId: uuidv4(),
    userName: "Al Pawcino",
    icon: cat,
    timePosted: new Date("January 28, 2022 09:14:21"),
    postDescription: "drop a comment if you come from the odin project 🙌",
    likes: 0,
    comments: [],
  },
];

export default testPosts;
