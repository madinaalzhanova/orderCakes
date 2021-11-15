import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Typography from '@mui/material/Typography';
import { AppBar, Tab, Tabs, makeStyles, withStyles } from "@material-ui/core";
import { saveTemporary } from "../../store/actions/temporaryAction";
const statuses = [
  { status: "MAIN", title: "Главная", link: "/" },
  { status: "MENU", title: "Меню", link: "/menu" },
  { status: "BUSKET", title: "Корзина", link: "/busket" },
  { status: "ORDERS", title: "Мой заказы", link: "/orders" },
];

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #E4E7EE",
  },
  indicator: {
    backgroundColor: "#FFD400",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    color: "#2E83C5",
    opacity: 1,
    fontWeight: theme.typography.fontWeightBolder,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#13152D",
      opacity: 1,
    },
    "&$selected": {
      color: "#13152D",
      fontWeight: theme.typography.fontWeightBolder,
    },
    "&:focus": {
      color: "#13152D",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const HeaderTabs = (props) => {
  const { tab, saveTemporary } = props

  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const handleTab = (value) => {

    console.log("saveTemporary", tab)
    saveTemporary('tab', value);
  };
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <div style={{ paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="inherit" component="div">
          Cookbook
        </Typography>

        <AntTabs
          value={tab}
          aria-label="simple tabs example"
          onChange={(event, value) => handleTab(value)}
        >
          {statuses.map((item, index) => (
            <AntTab
              key={index}
              value={item.status}
              className={classes.tab}
              label={item.title}
              component={Link}
              to={item.link}
              {...a11yProps(index)}
            />
          ))}
        </AntTabs>
      </div>
    </AppBar>
  );
};
function mapStateToProps(state) {
  return {
    tab: state.temporary.tab,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTemporary: (name, value) =>
      dispatch(saveTemporary(name, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTabs);

const useStyles = makeStyles({
  root: {
    width: "100%",
    color: "#2E83C5",
    backgroundColor: "#FFFFFF",
    position: 'relative',
    zIndex: 10,
    boxShadow: "0px 3px 9px rgba(19, 21, 45, 0.1), 0px 2px 3px rgba(19, 21, 45, 0.05)"
  },
  tabs: {
    border: "1px solid #000000",
  },
  tab: {
    fontSize: 14,
    fontWeight: "medium",
    textTransform: "none",
  },
});
