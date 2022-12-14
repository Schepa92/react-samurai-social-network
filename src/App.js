import './App.css';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Suspense } from 'react';

import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Preloader/Preloader';

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper__content'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route
                path='/profile/:profileId'
                element={<ProfileContainer />}
              />
              <Route path='/profile/' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
