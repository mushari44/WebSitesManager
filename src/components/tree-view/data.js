export const menus = [
  {
    id: 2,
    label: "MERN stack",
    to: "/MERN stack",
    children: [
      {
        id: 10,
        label: "blog app",
        to: "blog app",
        children: [
          {
            id: 10.1,
            label: "Front End",
            to: "Website link",
            children: [
              {
                id: 10.2,
                label: "Website link",
                to: "https://blog-app.mushari-alothman.uk",
                children: [],
              },
            ],
          },
          {
            id: 10.5,
            label: "Back End",
            to: "Server link",
            children: [
              {
                id: 10.6,
                label: "Server link",
                to: "https://blog--server-f3dbd17cdd52.herokuapp.com/api/blogs",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        label: "shopping app",
        to: "shopping app",
        children: [
          {
            id: 9.1,
            label: "Front End",
            to: "Website link",
            children: [
              {
                id: 9.2,
                label: "Website link",
                to: "https://shopping-cart.mushari-alothman.uk",
                children: [],
              },
            ],
          },
          {
            id: 9.5,
            label: "Back End",
            to: "Server link",
            children: [
              {
                id: 9.6,
                label: "Server link",
                to: "https://shopping-cart-server.mushari-alothman.uk",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: "Students information's",
        to: "Students information's",
        children: [
          {
            id: 3.1,
            label: "Front End",
            to: "Website link",
            children: [
              {
                id: 3.2,
                label: "Website link",
                to: "https://mushari44.github.io/StudentsInformations/",
                children: [],
              },
            ],
          },
          {
            id: 3.5,
            label: "Back End",
            to: "Server link",
            children: [
              {
                id: 3.6,
                label: "Server link",
                to: "https://student-server.vercel.app/students/getInfo",
                children: [],
              },
            ],
          },
        ],
      },

      {
        id: 8,
        label: "Food Recipe",
        to: "Food Recipe",
        children: [
          {
            id: 8.1,
            label: "Front End",
            to: "website link",
            children: [
              {
                id: 8.2,
                label: "Website link",
                to: "https://food-recipes.mushari-alothman.uk",
                children: [],
              },
            ],
          },
          {
            id: 8.3,
            label: "Back End",
            to: "server",
            children: [
              {
                id: 8.4,
                label: "Server link",
                to: "https://food-recipe-server1.vercel.app/Favorites",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        label: "TicTacToe Game",
        to: "TicTacToeGame",
        children: [
          {
            id: 7.1,
            label: "Front End",
            to: "website link",
            children: [
              {
                id: 7.2,
                label: "Website link",
                to: "https://tictactoe.mushari-alothman.uk",
                children: [],
              },
            ],
          },
          {
            id: 7.3,
            label: "Back End",
            to: "server",
            children: [
              {
                id: 7.4,
                label: "Server link",
                to: "https://tictactoe-server.mushari-alothman.uk/",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        label: "ToDoTasks",
        to: "ToDoTasks",
        children: [
          {
            id: 4.1,
            label: "Front End",
            to: "website link",
            children: [
              {
                id: 4.2,
                label: "Website link",
                to: "https://mushari44.github.io/ToDoTasks/",
                children: [],
              },
            ],
          },
          {
            id: 4.3,
            label: "Back End",
            to: "server",
            children: [
              {
                id: 4.4,
                label: "Server link",
                to: "https://to-do-tasks-server.vercel.app/ToDo/GetTasks",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Vite",
    to: "Vite",
    children: [
      {
        id: 5.1,
        label: "vite Learning",
        to: "Vite learning",
        children: [
          {
            id: 5.2,
            label: "Front End",
            to: "website",
            children: [
              {
                id: 5.3,
                label: "Website link",
                to: "https://mushari44.github.io/viteProject/",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 5.5,
        label: "api movie Search",
        to: "Front End",
        children: [
          {
            id: 5.6,
            label: "Front End",
            to: "website",
            children: [
              {
                id: 5.7,
                label: "Website link",
                to: "https://mushari44.github.io/ApiSearchMovie/",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "React",
    to: "React",
    children: [
      {
        id: 6.1,
        parent: "React",
        label: "React Learning",
        to: "React learning",
        children: [
          {
            id: 6.2,
            parent: "React Learning",
            label: "Scroll indicator",
            to: "/scroll",
            children: [],
          },
          {
            id: 6.3,
            label: "Load More Data",
            to: "/load-more-data",
            children: [],
          },
          {
            id: 6.4,
            label: "github-profile-finder",
            to: "/github-profile-finder",
            children: [],
          },
          {
            id: 6.5,
            label: "weather-app",
            to: "/weather-app",
            children: [],
          },
          {
            id: 6.5,
            label: "blog-app",
            to: "/blog-app",
            children: [],
          },
        ],
      },
    ],
  },
];

export default menus;
