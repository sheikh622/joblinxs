export interface AccountData {
  member: MemberData[];
  notification: Notification;
}

export interface MemberData {
  id: number;
  title: string;
  image: string;
  name: string;
  email: string;
}

export interface Notification {
  activity: Activity[];
  // application: Activity[];
}

export interface Activity {
  id: number;
  title: string;
  defaultChecked: boolean;
}

const accountData: AccountData = {
  member: [
    {
      id: 1,
      title: "Your Twitter",
      image: "/assets/images/avatar/A4.jpg",
      name: "@Johndeuo",
      email: "",
    },
    {
      id: 2,
      title: "Your Github",
      image: "/assets/images/avatar/A6.jpg",
      name: "@Johndeuo",
      email: "",
    },
    {
      id: 3,
      title: "Your Facebook",
      image: "/assets/images/avatar/A2.jpg",
      name: "King Rox",
      email: "",
    },
    {
      id: 4,
      title: "Your Google",
      image: "/assets/images/avatar/A14.jpg",
      name: "",
      email: "johndeuo@gmail.com",
    },
    {
      id: 5,
      title: "Your Github",
      image: "/assets/images/avatar/A6.jpg",
      name: "@Johndeuo",
      email: "",
    },
    {
      id: 6,
      title: "Your Facebook",
      image: "/assets/images/avatar/A2.jpg",
      name: "King Rox",
      email: "",
    },
  ],
  notification: {
    activity: [
      {
        id: 1,
        title: "Enable Notifications",
        defaultChecked: true,
      },
    ],
 
  },
};

export default accountData;
