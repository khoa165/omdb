// React.
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Redux.
import { Provider } from 'react-redux';
import store from './store';

// Components.
import HomePage from './components/HomePage';
import MovieInfo from './components/MovieInfo';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/movies/:id' component={MovieInfo} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
