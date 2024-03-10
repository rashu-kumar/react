const INIT_STATE = {
    carts: [],
  };
  
  export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case 'ADD_CART':
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
  
      case 'RMV_CART':
        const updatedData = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: updatedData,
        };
  
      default:
        return state;
    }
  };
  