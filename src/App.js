import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
// import "bulma/css/bulma.min.css";
import Router from "./router";

import { store, persistor } from "./store";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#2E83C5",
//       main: "#FFD400",
//       dark: "#002884",
//       // contrastText: '#fff',
//     },
//     secondary: {
//       light: "#8F929D",
//       main: "#F7E4C5",
//     },
//     info: {
//       main: "#13152D",
//     },
//     text: {
//       primary: "#13152D",
//     },
//   },
// });
const App = () => {

  return (
    // <MuiThemeProvider theme={theme}>
    //   <MuiPickersUtilsProvider
    //     libInstance={moment}
    //     utils={MomentUtils}
    //     locale={"ru"}
    //   >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>

          <Router />
        </>
      </PersistGate>
    </Provider>
    //   </MuiPickersUtilsProvider>
    // </MuiThemeProvider>
  );
};
export default App;