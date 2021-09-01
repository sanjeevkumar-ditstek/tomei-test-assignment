import { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import RoutesConfing from "./config/routes";
import NotificationAlert from "./shared/components/notification-alert";
import PrivateRoute from "./shared/functional/private-route";


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<></>}>
          <Switch>
            {
              RoutesConfing.map((route, i) => {
                const Component = route.component;
                return route.private ?
                  // handle private routes of the application
                  <PrivateRoute key={i} exact={route.exact} path={route.path} render={(props) => <Component {...props} />} />
                  :
                  // handle public routes of the application
                  <Route key={i} exact={route.exact} path={route.path} render={(props) => <Component {...props} />} />
              })
            }
          </Switch>
        </Suspense>
      </Router>
      <NotificationAlert />
    </div>
  );
}

export default App;
