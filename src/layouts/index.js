import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'scss/index.scss';
import 'fontawesome';

const Layout = ({ children, data }) => (
  <div className="container-lg">
    <Helmet>
      <html lang="en" />
    </Helmet>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Front-end Developer, CRO consultant, UI/UX enthousiast. - Twan Mulder.' },
        { name: 'keywords', content: 'portfolio, projects, articles, Twan, Mulder, Twan Mulder, developer, front-end, CRO, UI, UX, UI/UX' },
        { name: 'google-site-verification', content: 'iSgOqOBK8bpK2T1u0LWkGcv2wOMYjECbKzNEl-IKGg0' },
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
