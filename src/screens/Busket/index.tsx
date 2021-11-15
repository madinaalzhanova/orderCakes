
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { savePermanentItem } from '../../store/actions/permanetAction';
import '../App.css';
import { Button } from '@mui/material';
const useStyles = makeStyles({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#13152D',
        textAlign: 'left',
        marginLeft: 200,
        marginTop: 50

    },
    row: { width: "72%", marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid black' },
    subTitle: {
        fontSize: 14,
        textAlign: 'left',
        color: 'black'
    },
    titleBar: {
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "none",
        textAlign: 'left',
        color: 'black'
    },
    content: {
        width: "80%",
        // border: '1px solid black',
        marginLeft:24,
    },
    btns: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    }
});
const Busket = (props: any) => {
    const { busket } = props
    const classes = useStyles();
    const handleAction = (type: String, item: any) => {
        const newBusket = busket
        const count = item.count
        const objIndex = newBusket.findIndex(((obj: any) => obj.id === item.id));

        if (type === 'minus') {
            if (count > 1) {
                console.log("Before update: ", newBusket[objIndex]);
                newBusket[objIndex].count = count - 1;
                props.savePermanentItem('busket', newBusket);
            }

        } else {
            console.log("Before update: ", newBusket[objIndex]);
            newBusket[objIndex].count = count + 1;
            props.savePermanentItem('busket', newBusket);
        }
    }
    return (
        <div className="App">
            <p className={classes.header}>
                Корзина
            </p>
            <div className="App-header">

                {
                    busket.map((item: any, index: any) => {

                        return (<div key={index} className={classes.row}>
                            <img
                                src="https://storage.googleapis.com/happytech-public/products/product-834-1.0.png?v=1001"
                                // src={`${item.img}?w=248&fit=crop&auto=format`}
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.name}
                                loading="lazy"
                                style={{ width: 100, height: 100, borderRadius: 8 }}
                            />
                            <div className={classes.content}>
                                <p className={classes.title}>{item.name}</p>
                                <p className={classes.subTitle}>{`${item.price} ₸`}</p>
                            </div>
                            <div className={classes.btns}>
                                <Button onClick={() => handleAction('plus', item)}>+</Button>
                                <p className={classes.subTitle}>{item.count}</p>
                                <Button onClick={() => handleAction('minus', item)}>-</Button>
                            </div>
                        </div>)
                    })
                }


            </div>
        </div>
    );
}

function mapStateToProps(state: any) {
    console.log("BUSKET", state.permanent.busket)
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
export default connect(mapStateToProps, mapDispatchToProps)(Busket);

