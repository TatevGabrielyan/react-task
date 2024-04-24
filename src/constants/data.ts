import avatar1 from '../assets/images/Avatar.jpeg';
import instaIcon from '../assets/images/Frame.svg';
import xIcon from '../assets/images/Vector (1).svg';
import fbIcon from '../assets/images/Frame (1).svg';

export const data = {
    avatars: [
      { key: '1', size: 'default', shape: 'circle', image: avatar1 },
    ],
    icons : [ 
          { key: '3', image: fbIcon},
          { key: '2', image: xIcon },
          { key: '1', image: instaIcon },
    ],
    inputs: [
      { key: '1', size: 'default', block: false },
      { key: '2', size: 'small', block: false },
    ],
    name: 'Name Surname',
    title: 'Job Title',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };
  

  export const cardData = {
    icons: [
      { key: '3', image: fbIcon },
      { key: '2', image: xIcon },
      { key: '1', image: instaIcon },
    ],
    category: 'Category name',
    title: 'Title',
    author: 'Author name',
    date: 'Date',
    viewCount: 'View Count',
    image: avatar1, 
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Another Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    shareIcons : [ 
        { key: '3', image: fbIcon},
        { key: '2', image: xIcon },
        { key: '1', image: instaIcon },
    ],
    images : [
      {
        id: 1,
        src: avatar1, 
        alt: "Image 1",
        title: "Image 1 Title",
      },
      {
        id: 2,
        src: instaIcon, 
        alt: "Image 2",
        title: "Image 2 Title",
      },
      {
        id: 3,
        src: avatar1, 
        alt: "Image 3",
        title: "Image 3 Title",
      },
      {
        id: 4,
        src: xIcon,
        alt: "Image 4",
        title: "Image 4 Title",
      },
    ]
  };
  