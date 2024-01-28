const messages = [
  {
    isGroupMessage: false,
    users: [
      {
        username: "Hari Om",
        email: "hari@example.com",
      },
      {
        username: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "617a077e18c258b4dd4",
    chatName: "Hari Om",
  },
  {
    isGroupMessage: false,
    users: [
      {
        username: "Guest1",
        email: "guest1@example.com",
      },
      {
        username: "Raj",
        email: "Raj@example.com",
      },
    ],
    _id: "617a077e18c2527c4dd4",
    chatName: "Guest1",
  },
  {
    isGroupMessage: false,
    users: [
      {
        username: "Antony",
        email: "antony@example.com",
      },
      {
        username: "Sujeet",
        email: "sujeet@example.com",
      },
    ],
    _id: "617a077e18c27c4dd4",
    chatName: "Antony",
  },
  {
    isGroupMessage: true,
    users: [
      {
        username: "Pratham",
        email: "pratham@example.com",
      },
      {
        username: "Piyush",
        email: "piyush@example.com",
      },
      {
        username: "Guest2",
        email: "guest2@example.com",
      },
    ],
    _id: "617a518c40816472c78",
    chatName: "BestFriend",
    groupAdmin: {
      username: "Guest1",
      email: "guest1@example.com",
    },
  },
  {
    isGroupMessage: false,
    users: [
      {
        username: "Anmol",
        email: "anmol@example.com",
      },
      {
        username: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "617a077e18c25c7cfdd4",
    chatName: "Anmol",
  },
  {
    isGroupMessage: true,
    users: [
      {
        username: "Stayam",
        email: "stayam@example.com",
      },
      {
        username: "Piyush",
        email: "piyush@example.com",
      },
      {
        username: "Guest3",
        email: "guest3@example.com",
      },
    ],
    _id: "617a518c408115072c78",
    chatName: "Lietians",
    groupAdmin: {
      username: "Guest1",
      email: "guest1@example.com",
    },
  },
];

module.exports = { messages };
