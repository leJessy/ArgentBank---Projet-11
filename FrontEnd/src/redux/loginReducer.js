const initialState = {
    user: {
      isAuthenticated: false,
      token: null,
    },
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: {
            isAuthenticated: true,
            token: action.payload.token,
          },
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  