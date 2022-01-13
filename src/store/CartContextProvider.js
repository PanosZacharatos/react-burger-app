import React,{useState} from 'react';

const CartContext = React.createContext({
    hideModal: true ,
    changeModalStatus : () =>{},
    items: [] ,
    addItem: (item) => {} ,
    removeItem: (id) => {}
});

export function CartContextProvider(props) {
    const [hideModal,setHideModal] = useState(true);
    const [items,setItems] = useState([]);
    const changeModalStatus = () => {
        setHideModal(()=>!hideModal)
    }

    const addItem = (item) =>{

    };

    return (
        <CartContext.Provider value={{
            hideModal:hideModal ,
            changeModalStatus: changeModalStatus,
            items : items,
            addItem : addItem ,
            removeItem : addItem
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;
