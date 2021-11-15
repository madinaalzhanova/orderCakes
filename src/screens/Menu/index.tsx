
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import '../App.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingBasket';
import { savePermanentItem } from '../../store/actions/permanetAction';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#13152D',
        textAlign: 'left',
        marginLeft: 200,
        marginTop: 50

    },
    img: { width: 250, height: 250, borderRadius: 8 },
    subTitle: {
        fontSize: 14,
        textAlign: 'left'
    },
    titleBar: {
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        textTransform: "none",
        textAlign: 'left'
    },
});

const Menu = (props: any) => {
    const classes = useStyles();
    const menu = [
        { id: 0, name: "Молочная девочка", price: "5000" },
        { id: 1, name: "Молочная девочка", price: "5000" },
        { id: 2, name: "Молочная девочка", price: "5000" },
        { id: 3, name: "Молочная девочка", price: "5000" },
        { id: 4, name: "Молочная девочка", price: "5000" },
        { id: 5, name: "Молочная девочка", price: "5000" },
        { id: 6, name: "Молочная девочка", price: "5000" },
        { id: 7, name: "Молочная девочка", price: "5000" },
    ];
    const addToBusket = (item: any) => {
        const cake = {
            id: item.id,
            name: item.name,
            price: item.price,
            count: 1
        }
        const busket = [
            ...props.busket,
            cake
        ]
        console.log("BUSKET", busket)
        props.savePermanentItem('busket', busket)
    }

    return (
        <div className="App">
            <p className={classes.header}>
                Торты
            </p>
            <header className="App-header">

                <ImageList cols={4} >

                    {menu.map((item, index) => (
                        <ImageListItem key={index} style={{ justifyContent: "space-between", margin: 16 }}  >
                            <img
                                src="https://storage.googleapis.com/happytech-public/products/product-834-1.0.png?v=1001"
                                // src={`${item.img}?w=248&fit=crop&auto=format`}
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.name}
                                loading="lazy"
                                style={{ width: 230, height: 230, borderRadius: 8 }}
                            />
                            <ImageListItemBar

                                title={item.name}
                                subtitle={`${item.price} ₸`}

                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                    subtitle: classes.subTitle
                                }}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'white' }}
                                        aria-label={`info about ${item.name}`}
                                        onClick={() => addToBusket(item)}
                                    >
                                        <ShoppingCartIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </header>


        </div>
    );
}

//export default Menu;

function mapStateToProps(state: any) {
    console.log("PER", state.permanent)
    return {
        busket: state.permanent.busket,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        savePermanentItem: (name: any, value: any) =>
            dispatch(savePermanentItem(name, value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
