import useTheme from '../../customHooks/useTheme';
import FooterData from './FooterData';

const Footer = () => {
  const { darkTheme } = useTheme();

  return (
    <div
      id='footer'
      style={{
        background: !darkTheme
          ? `radial-gradient(rgba(0, 128, 0, 1), rgba(0, 0, 0, 1))`
          : `radial-gradient(#eef518, rgba(64, 130, 109, 1))`,
      }}
    >
      <div id='footerText'>
        <span>
          Designed & Built by&nbsp;
          <a
            id='websiteCredit'
            href='https://www.linkedin.com/in/cjones1827/'
            style={{ color: darkTheme ? 'rgba(0, 128, 0, 1)' : '#eef518' }}
          >
            CJ Jones
          </a>
          &nbsp;of&nbsp;
          <a
            id='websiteCredit'
            href='https://www.seejonesengineer.com/'
            style={{ color: darkTheme ? 'rgba(0, 128, 0, 1)' : '#eef518' }}
          >
            SeeJonesEngineer.com
          </a>
          &nbsp;© 2022&nbsp;-&nbsp;
          {new Date().getFullYear()}
        </span>
      </div>

      <div id='footerIcons'>
        {FooterData.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              rel='noreferrer'
              target='_blank'
              title={item.tooltip}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
