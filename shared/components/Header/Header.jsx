import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import PageWrapper from '../PageWrapper/PageWrapper';
import Logo from '../Logo/Logo';

function Header(props, context) {
  return (
    <PageWrapper>
      <Link to="/" className="Logo">
        {/*<img className="z-depth2" src="/img/vovlogsv.svg" alt="FC Vova" width="100" height="100"/> */}
        <Logo className="z-depth2"/>
      </Link>
      <div className="Header z-depth1">
        <div className="header-content">
          <h1 className="site-title">
            {/* <Link to="/" onClick={props.handleLogoClick}>Title</Link> */}
          </h1>

        </div>
      </div>
    </PageWrapper>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;
/*{
 context.router.isActive('/', true)
 ? <a className="add-post-button" href="#" onClick={props.onClick}>Add Post</a>
 : null
 }*/
