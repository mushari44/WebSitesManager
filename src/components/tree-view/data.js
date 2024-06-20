export const menus = [
  {
    id: 2,
    label: "MERN stack",
    to: "/MERN stack",
    children: [
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
        ],
      },
      {
        id: 6.5,
        label: "api movie Search",
        to: "Front End",
        children: [
          {
            id: 6.6,
            label: "Front End",
            to: "https://mushari44.github.io/ApiSearchMovie/",
            children: [
              { id: 5.7, label: "Website link ", to: "", children: [] },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
