import { v4 as uuidv4 } from "uuid";

const testPosts = [
  {
    userId: "jIqGkHYQWSXsE2lPNIj6tbgB1jF3",
    postId: uuidv4(),
    userName: "theRealElon",
    icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/elon_fvwzmu.jpg",
    timePosted: new Date("January 23, 2022 13:15:30"),
    postDescription:
      "Cat walks in keyboard try to jump onto window and fall while scratching at wall for poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls but stare at guinea pigs poop on couch.!",
    picture: null,
    likes: [],
    comments: [
      {
        commentId: uuidv4(),
        userName: "ronaldo7",
        icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/ronaldo_nzscxg.jpg",
        comment: "dude that's awesome",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "lennon",
        icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/dogTwo_m6rtwx.png",
        comment: "so inspirational 🥺",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "Joan",
        icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/funny-dog_sphxk2.jpg",
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
    icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/ronaldo_nzscxg.jpg",
    timePosted: new Date("January 25, 2022 13:15:30"),
    postDescription: "/r/programmingHumor omg 😂😂😂",
    picture:
      "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/screenshot_xvbuug.png",
    likes: [],
    comments: [
      {
        commentId: uuidv4(),
        userName: "theRealElon",
        icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/elon_fvwzmu.jpg",
        comment:
          "The War of the 5 kings. The Knight of Lemonwood. Words are like wind. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. Never Resting.",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "lennon",
        icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/dogTwo_m6rtwx.png",
        comment: "lol",
        likes: [],
      },
      {
        commentId: uuidv4(),
        userName: "Joan",
        icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/funny-dog_sphxk2.jpg",
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
    icon: "https://res.cloudinary.com/de2ymful4/image/upload/v1646722165/facebook/test-post-data/cat_m5rggx.jpg",
    timePosted: new Date("January 28, 2022 09:14:21"),
    postDescription: "drop a comment if you come from the odin project 🙌",
    picture: null,
    likes: [],
    comments: [],
  },
];

export default testPosts;
