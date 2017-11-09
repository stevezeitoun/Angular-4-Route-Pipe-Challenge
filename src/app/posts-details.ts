import { Post } from './post';

export const POSTS: Post[] = [
  {
    id: 1 ,
    title: 'juventus',
    description: 'È di Bernardeschi il "Goal of the month" di ottobre',
    date: new Date(2017, 0 , 21) ,
    image: 'juve1.jpg'
   },
  {
    id: 2,
    title: 'barcelone',
    description: 'Messi s next three challenges',
    date: new Date(2017, 3 , 2),
    image: 'messi.jpg'
  },
  { id: 3,
    title: 'juventus',
    description: 'GameReview: Juve-Benevento',
    date: new Date(2017, 5 , 12),
    image: 'Gamerev.jpg'
  },
  { id: 4,
    title: 'real Madrid',
    description: 'Treize Madridistas convoqués par leurs sélections',
    date: new Date(2017, 7 , 15),
    image: 'kroos.jpg'
  },
  { id: 5,
    title: 'liverpool',
    description: 'Mane, Coutinho and Lallana returns are brilliant for us',
    date: new Date(2017, 11 , 19),
    image: 'liverpool.jpeg'
  },
  { id: 6,
    title: 'psg',
    description: 'Giovani Lo Celso avec l Albiceleste',
    date: new Date(2017, 11 , 19),
    image: 'psg.jpeg'
  },
];
