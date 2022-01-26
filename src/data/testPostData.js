const testPosts = [
  {
    userName: "theRealRicardo",
    timePosted: new Date("January 23, 2022 13:15:30"),
    postDescription: "Just bought a new bike, it's a ninja 400!!!",
    likedBy: ["My Mother", "Robert", "Joan Artiga"],
    comments: [
      {
        userName: "Robert",
        comment: "dude that's awesome",
      },
      {
        userName: "Brian",
        comment: "sweet!!! 🙌",
      },
      {
        userName: "Joan",
        comment: "lets race 🏎!!!",
      },
    ],
  },
  {
    userName: "John",
    timePosted: new Date("January 22, 2022 17:14:21"),
    postDescription:
      "did anyone catch the ufc  fights tonight?! that was a crazy knockout",
    comments: [
      {
        userName: "Dana White",
        comment: "i was there!!",
      },
      {
        userName: "conor mcgreggor",
        comment: "yeah mate!!!",
      },
      {
        userName: "jackson_234",
        comment: "wait, there was a fight?!",
      },
    ],
  },
];

export default testPosts;
