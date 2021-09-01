import React from 'react';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import FullName from './components/Profile/FullName';
import Address from './components/Profile/Address';


function App() {
  return (
    <React.Fragment>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </React.Fragment>
  );
}

export default App;

/**
 * Create a project using create-react-app.
Create App.js file in src folder and use it as a root component for your React app.
Create a profile folder (path: src/Component/Profile).
Inside your profile folder, create: (ProfilePhoto.js / FullName.js / Address.js ).
ProfilePhoto.js: a functional component that returns a photo of your profile.
FullName.js: a functional component that returns your full name.
Address.js:  a functional component that returns your address.
Import profile components into App.js and use them.
Feel free to style your app as you wish.
 * 
 */