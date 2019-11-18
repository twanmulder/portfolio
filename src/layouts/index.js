import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'scss/index.scss';
import 'fontawesome';

const Layout = ({ children, data }) => (
  <div className="container-lg">
    <Helmet>
      <html lang="en"></html>
    </Helmet>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Twan Mulder\'s personal Portfolio website' },
        { name: 'keywords', content: 'portfolio, projects, articles, Twan, Mulder' },
      ]}
    />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
