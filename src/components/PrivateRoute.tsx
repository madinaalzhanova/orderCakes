import { Route } from 'react-router-dom'
import HeaderTabs from "./HeaderTabs";
import "./App.css";
const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: any;
  exact?: boolean;
  path?: string;
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <main className="main">
          <HeaderTabs />
          <Component {...props} />
        </main>

      )}
    />
  );
};
export default PrivateRoute;
