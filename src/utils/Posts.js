const posts = [
  {
    id: 101,
    username: "John Doe",
    userId: "2103820100026",
    userAvatar: "https://i.pravatar.cc/100?img=1",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Had a great time in the mountains!",
    likes: 45,
    timestamp: "2 hours ago",
    comments: [
      {
        id: 1,
        username: "Emily Stone",
        userAvatar: "https://i.pravatar.cc/100?img=2",
        text: "This is an awesome post!",
        replies: [
          {
            id: 11,
            username: "Ravi Kumar",
            userAvatar: "https://i.pravatar.cc/100?img=3",
            text: "Absolutely agree!"
          },
          {
            id: 12,
            username: "Nina Patel",
            userAvatar: "https://i.pravatar.cc/100?img=4",
            text: "Yeah, really cool!"
          }
        ]
      },
      {
        id: 2,
        username: "Liam Walker",
        userAvatar: "https://i.pravatar.cc/100?img=5",
        text: "Where was this taken?",
        replies: [
          {
            id: 13,
            username: "John Doe",
            userAvatar: "https://i.pravatar.cc/100?img=1",
            text: "It was Manali!"
          },
          {
            id: 14,
            username: "Emily Stone",
            userAvatar: "https://i.pravatar.cc/100?img=2",
            text: "I think it's from last year’s trip."
          }
        ]
      },
      {
        id: 3,
        username: "Sara Lee",
        userAvatar: "https://i.pravatar.cc/100?img=6",
        text: "Great shot!",
        replies: []
      }
    ]
  },
  {
    id: 102,
    username: "Sophia Turner",
    userId: "sophiaturner123",
    userAvatar: "https://i.pravatar.cc/100?img=7",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Exploring the streets of New York!",
    likes: 120,
    timestamp: "1 hour ago",
    comments: [
      {
        id: 1,
        username: "James Lee",
        userAvatar: "https://i.pravatar.cc/100?img=8",
        text: "New York looks amazing!",
        replies: [
          {
            id: 11,
            username: "Sophia Turner",
            userAvatar: "https://i.pravatar.cc/100?img=7",
            text: "It truly is! The energy is unmatched."
          }
        ]
      },
      {
        id: 2,
        username: "Lily Collins",
        userAvatar: "https://i.pravatar.cc/100?img=9",
        text: "How was the weather there?",
        replies: [
          {
            id: 12,
            username: "Sophia Turner",
            userAvatar: "https://i.pravatar.cc/100?img=7",
            text: "It was chilly but really fun!"
          }
        ]
      }
    ]
  },
  {
    id: 103,
    username: "Michael Smith",
    userId: "michaelsmith123",
    userAvatar: "https://i.pravatar.cc/100?img=10",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Relaxing on the beach! #vacationmode",
    likes: 75,
    timestamp: "3 hours ago",
    comments: [
      {
        id: 1,
        username: "Emma Watson",
        userAvatar: "https://i.pravatar.cc/100?img=11",
        text: "Looks so peaceful!",
        replies: [
          {
            id: 11,
            username: "Michael Smith",
            userAvatar: "https://i.pravatar.cc/100?img=10",
            text: "It really was, just what I needed."
          }
        ]
      }
    ]
  },
  {
    id: 104,
    username: "Lucas Gray",
    userId: "lucasgray123",
    userAvatar: "https://i.pravatar.cc/100?img=12",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Backpacking through the Swiss Alps!",
    likes: 130,
    timestamp: "4 hours ago",
    comments: [
      {
        id: 1,
        username: "Isabella Rose",
        userAvatar: "https://i.pravatar.cc/100?img=13",
        text: "That looks amazing! I’ve always wanted to go there.",
        replies: []
      },
      {
        id: 2,
        username: "David Green",
        userAvatar: "https://i.pravatar.cc/100?img=14",
        text: "The scenery is breathtaking!",
        replies: [
          {
            id: 13,
            username: "Lucas Gray",
            userAvatar: "https://i.pravatar.cc/100?img=12",
            text: "Absolutely, the views were incredible."
          }
        ]
      }
    ]
  },
  {
    id: 105,
    username: "Olivia Carter",
    userId: "oliviacarter123",
    userAvatar: "https://i.pravatar.cc/100?img=15",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Had the best pizza ever! 🍕",
    likes: 200,
    timestamp: "5 hours ago",
    comments: [
      {
        id: 1,
        username: "Sophia Turner",
        userAvatar: "https://i.pravatar.cc/100?img=7",
        text: "Yum! Where did you get it?",
        replies: [
          {
            id: 11,
            username: "Olivia Carter",
            userAvatar: "https://i.pravatar.cc/100?img=15",
            text: "At a small pizzeria downtown, it's my favorite."
          }
        ]
      },
      {
        id: 2,
        username: "Emma Watson",
        userAvatar: "https://i.pravatar.cc/100?img=11",
        text: "I need to try it!",
        replies: []
      }
    ]
  },
  {
    id: 106,
    username: "Ryan Cooper",
    userId: "ryancooper123",
    userAvatar: "https://i.pravatar.cc/100?img=16",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Playing football with friends! ⚽",
    likes: 56,
    timestamp: "6 hours ago",
    comments: [
      {
        id: 1,
        username: "Michael Smith",
        userAvatar: "https://i.pravatar.cc/100?img=10",
        text: "Looks like a great game!",
        replies: []
      }
    ]
  },
  {
    id: 107,
    username: "Ava Harris",
    userId: "avaharris123",
    userAvatar: "https://i.pravatar.cc/100?img=17",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Sunset views in Bali 🌅",
    likes: 250,
    timestamp: "7 hours ago",
    comments: [
      {
        id: 1,
        username: "Sophia Turner",
        userAvatar: "https://i.pravatar.cc/100?img=7",
        text: "I love Bali! It's so beautiful there.",
        replies: []
      }
    ]
  },
  {
    id: 108,
    username: "Daniel Lee",
    userId: "daniellee123",
    userAvatar: "https://i.pravatar.cc/100?img=18",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Hiking to the top of the world! 🏔️",
    likes: 90,
    timestamp: "8 hours ago",
    comments: [
      {
        id: 1,
        username: "Olivia Carter",
        userAvatar: "https://i.pravatar.cc/100?img=15",
        text: "Amazing view! How was the hike?",
        replies: [
          {
            id: 11,
            username: "Daniel Lee",
            userAvatar: "https://i.pravatar.cc/100?img=18",
            text: "It was challenging but totally worth it."
          }
        ]
      }
    ]
  },
  {
    id: 109,
    username: "Ethan Scott",
    userId: "ethanscott123",
    userAvatar: "https://i.pravatar.cc/100?img=19",
    image: "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Exploring the city streets of Paris 🇫🇷",
    likes: 210,
    timestamp: "9 hours ago",
    comments: [
      {
        id: 1,
        username: "Isabella Rose",
        userAvatar: "https://i.pravatar.cc/100?img=13",
        text: "Paris is a dream! So much to see.",
        replies: []
      }
    ]
  }
];



export default posts  