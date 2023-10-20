const initialState = {
  user: {
    isAuthenticated: false,
    token: null,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          isAuthenticated: true,
          token: action.payload.token,
        },
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: {
          isAuthenticated: false,
          token: null,
        },
      };
    case 'SET_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
        },
      };
    default:
      return state;
  }
};

export default userReducer;