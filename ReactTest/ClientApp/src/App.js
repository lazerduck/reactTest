import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FlipString from './components/FlipString';
import AddUser from './components/AddUser';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/flip' component={FlipString} />
    <Route path='/add' component={AddUser} />
  </Layout>
);
