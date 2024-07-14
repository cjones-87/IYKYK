import { NavbarObject } from '../../../utils/utils';

const NavbarData: NavbarObject[] = [
  { header: 'Home', href: '/', dropdown: false },
  {
    header: 'Science',
    href: '/science',
    dropdown: true,
    options: [
      { content: 'Science & Nature', href: '/science/science_&_nature' },
      { content: 'Computers', href: '/science/computers' },
      { content: 'Mathematics', href: '/science/mathematics' },
      { content: 'Gadgets', href: '/science/gadgets' },
    ],
  },
  {
    header: 'Entertainment',
    href: '/entertainment',
    dropdown: true,
    options: [
      { content: 'Books', href: '/entertainment/books' },
      { content: 'Film', href: '/entertainment/film' },
      { content: 'Music', href: '/entertainment/music' },
      {
        content: 'Musicals & Theater',
        href: '/entertainment/musicals_&_theater',
      },
      { content: 'Television', href: '/entertainment/television' },
      { content: 'Video Games', href: '/entertainment/video_games' },
      { content: 'Board Games', href: '/entertainment/board_games' },
      { content: 'Comics', href: '/entertainment/comics' },
      {
        content: 'Anime & Manga',
        href: '/entertainment/anime_&_manga',
      },
      {
        content: 'Cartoons',
        href: '/entertainment/cartoons',
      },
    ],
  },
  {
    header: 'Social Science',
    href: '/social_science',
    dropdown: true,
    options: [
      { content: 'Mythology', href: '/social_science/mythology' },
      { content: 'History', href: '/social_science/history' },
      { content: 'Politics', href: '/social_science/politics' },
      { content: 'Art', href: '/social_science/art' },
    ],
  },
  {
    header: 'Environment',
    href: '/environment',
    dropdown: true,
    options: [
      { content: 'Geography', href: '/environment/geography' },
      { content: 'Animals', href: '/environment/animals' },
    ],
  },
  {
    header: 'Pop Culture',
    href: '/pop_culture',
    dropdown: true,
    options: [
      { content: 'Celebrities', href: '/popular_culture/celebrities' },
      { content: 'Sports', href: '/popular_culture/sports' },
      { content: 'Vehicles', href: '/popular_culture/vehicles' },
    ],
  },
  {
    header: 'Misc',
    href: '/misc',
    dropdown: true,
    options: [
      { content: 'General Knowledge', href: '/misc/general_knowledge' },
      { content: 'Random', href: '/misc/random' },
    ],
  },
];

export default NavbarData;
