import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import ProfileScreen from "./screens/ProfileScreen";
// import Series from "./pages/Series";
// import Films from "./pages/Films";
// import Nieuw from "./pages/Nieuw";
// import Lijst from "./pages/Lijst";
// import Kijk from "./pages/Kijk";




function App() {
  // const user = false;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //onAuthStateChanged is a liseners effect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
