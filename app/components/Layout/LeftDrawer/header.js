import React from 'react';
import PropTypes from 'prop-types';
// import { typography } from '@material-ui/core/styles';

const Header = (props) => {
  const { title } = props;

  const styles = {
    heading: {
      padding: '1px 0px 20px 15px',
      // backgroundImage: `url(${BkgImage})`,
      backgroundSize: 'cover',
      height: 175,
    },
    avatar: {
      float: 'left',
      display: 'block',
      marginRight: 15,
      marginTop: 10,
      //  boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)',
    },
    appTitle: {
      cursor: 'pointer',
      fontSize: 20,
      color: '#000',
      lineHeight: '65px',
      //  lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: 400,
      paddingLeft: 0,
    },
    fullName: {
      marginTop: 55,
      paddingBottom: 5,
      color: 'white',
      fontSize: 14,
      fontWeight: 600,
    },
    userName: {
      paddingTop: 12,
      color: 'white',
      fontSize: 14,
      fontWeight: 600,
    },
    icon: {
      color: 'white',
      lineHeight: '5px',
    },
  };

  // Determine if an users image exists, if not then user the blank associate image.
  // const imageName = image !== null && image !== '' ? image : 'BlankAssociate.jpg';

  return (
    <div style={styles.heading}>
      <div>
        <span style={styles.appTitle}>{title}</span>
      </div>
      <div className="row" style={{ marginTop: -20 }}>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  // userName: PropTypes.string,
  // fullName: PropTypes.string,
  // image: PropTypes.string,
  // handleChangeRequestNavDrawer: PropTypes.func,
};

export default Header;
