const testPosts = [
  {
    userName: "theRealRicardo",
    timePosted: new Date(),
    postDescription:
      "Just bought my new motorcycle, it's a ninja 400, Kawasaki with ABS. Only 5 miles, still not broken in",
    likedBy: ["My Mother", "Robert", "Joan Artiga"],
    comments: [
      {
        userName: "Robert",
        comment: "dude that's wicked",
      },
      {
        userName: "My Mother",
        comment: "are you crazy!! why aren't you answering my calls",
      },
      {
        userName: "Joan Artiga",
        comment:
          "ricardo why aren't you answering my text messages I thought we had something special",
      },
    ],
  },
  {
    userName: "compa chuy",
    timePosted: new Date(),
    postDescription:
      "did anyone catch the ufc tonight! that was a crazy knockout",
    comments: [
      {
        userName: "Dana White",
        comment: "i was there!!",
      },
      {
        userName: "conor mcgreggor",
        comment: "fook yeah mate",
      },
      {
        userName: "Joan Artiga",
        comment: "pls answer me!",
      },
    ],
  },
];

export default testPosts;
