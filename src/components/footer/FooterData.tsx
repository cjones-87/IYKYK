import { FaFilePdf, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAssignmentInd, MdOutlineAlternateEmail } from 'react-icons/md';

const FooterData = [
  {
    href: 'https://www.seejonesengineer.com/CJ_Jones_II_Portfolio_SWE_2024.pdf',
    icon: <FaFilePdf color='indigo' size='2rem' />,
    tooltip: 'View My Resume',
  },
  {
    href: 'mailto:cj@seejonesengineer.com',
    icon: <MdOutlineAlternateEmail color='indigo' size='2rem' />,
    tooltip: 'Email Me',
  },
  {
    href: 'https://www.seejonesengineer.com/',
    icon: <MdAssignmentInd color='indigo' size='2rem' />,
    tooltip: 'View My Portfolio',
  },
  {
    href: 'https://www.linkedin.com/in/cjones1827/',
    icon: <FaLinkedin color='indigo' size='2rem' />,
    tooltip: 'Connect With Me On LinkedIn',
  },
  {
    href: 'https://www.github.com/cjones-87/',
    icon: <FaGithub color='indigo' size='2rem' />,
    tooltip: 'View My GitHub',
  },
  {
    href: 'https://twitter.com/cjonesengineer1',
    icon: <FaTwitter color='indigo' size='2rem' />,
    tooltip: 'Connect With Me On Twitter/X',
  },
];

export default FooterData;
