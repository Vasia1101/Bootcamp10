let db = {
  users: [
    {
      userId: "dh23ggj5h32g543j5gf43",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-03-15T10:59:52.798Z",
      bio: "Hello",
      website: "https://user.com",
      location: "Ukraine. Ternopil"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2019-06-27T11:46:15.018Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "sdsfdghgjhullk",
      body: "nice on mate!",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true|false",
      screamId: "assdffhfjlj;j'",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ]
};
const userDetails = {
  // Redux data
  credentials: {
    userID: "asasasasasasasas",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-06-27T11:46:15.018Z",
    imageUrl: "image/fdf/fddf",
    bio: "hello, my n is",
    website: "https://user.com",
    location: "london, uk"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hhh555"
    },
    {
      userHandle: "user",
      screamId: "3I000"
    }
  ]
};
