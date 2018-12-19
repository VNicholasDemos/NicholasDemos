/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/';

import LeftDrawer from '../LeftDrawer';

import GlobalStyle from '../../global-styles';

// max-width: calc(768px + 16px * 2);
// padding: 0 16px;
const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - VeryNicholas.com: Demos, Blogs, Sundries"
        defaultTitle="VeryNicholas.com: Demos, Blogs, Sundries"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <LeftDrawer />
      <GlobalStyle />
    </AppWrapper>
  );
}
// <Route path="/features" component={FeaturePage} />
// <Route path="" component={NotFoundPage} />
