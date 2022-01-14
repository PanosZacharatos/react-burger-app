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
    const [itemsNames,setItemsNames] = useState([]);
    const [itemsIds,setItemsIds] = useState([]);
    const changeModalStatus = () => {
        setHideModal(()=>!hideModal)
    }

    const addItem = (item) =>{
        
        if (itemsNames.includes(item.name) && itemsNames.length > 0){
            //console.log('includes')
            const existingNameIndex = itemsNames.indexOf(item.name);
            setItems((prev)=>{
                items[existingNameIndex].amount += item.amount;
                return[...prev]
            })
            
        }
        else{
            //console.log('not includes');
            setItems(prev=>{
                const newItem = {
                    id: item.id ,
                    name: item.name ,
                    price: item.price,
                    amount: +(item.amount)
                }
                return [newItem,...prev]
            })
           setItemsNames(prev=>{
               return[item.name,...prev]
           })
           setItemsIds(prev=>{
               return[item.id,...prev]
           })
        }
        
    };


    const removeItem = (id) =>{
        const existingIdIndex = itemsIds.indexOf(id);
        if(items[existingIdIndex].amount===1){
            console.log(items)
            setItems(prev=>prev.filter(item=>item.id!==id))
            console.log(items)
        }
        else{
            setItems((prev)=>{
                items[existingIdIndex].amount -= 1;
                return[...prev]
            })
        }
    }
   

    return (
        <CartContext.Provider value={{
            hideModal:hideModal ,
            changeModalStatus: changeModalStatus,
            items : items,
            addItem : addItem ,
            removeItem : removeItem
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;
