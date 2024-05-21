const defaultState = {
    user: {
        id: 1,
        nickname: 'Doe',
        email: 'b@b',
        password: '1234'
    }
};

const AUTHORIZE = "AUTHORIZE";

export const currentUserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTHORIZE:
            console.log('authorized');
            return {
                ...state,
                user: action.current
            }
        default: {
            return state;
        }
    }

}