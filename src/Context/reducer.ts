let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")!).user
    : "";

let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")!).auth_token
    : "";

type UserState = {
    user: string,
    token: string,
    loading: boolean,
    errorMessage: string | null
};

export const initialState = {
    user: "" || user,
    token: "" || token,
    loading: false,
    errorMesage: null,
};

// type Action =
//  | { type: 'REQUEST_LOGIN' }
//  | { type: 'LOGIN_SUCCESS', payload: { user: string, auth_token: string} }
//  | { type: 'LOGOUT'}
//  | { type: 'LOGIN_ERROR', error: string}

// type ActionTypes =  'REQUEST_LOGIN' | 'LOGIN_SUCCESS' | 'LOGOUT' | 'LOGIN_ERROR';

// type ActionPayload = { user: string, auth_token: string}

type Action = 
// {type: ActionTypes, payload: ActionPayload}
//  | { type: 'REQUEST_LOGIN' }
//  | { type: 'LOGIN_SUCCESS', payload: { user: string, auth_token: string} }
//  | { type: 'LOGOUT'}
//  | { type: 'LOGIN_ERROR', error: string}
 { type: string, error?: string, payload?: { user: string, auth_token: string} }


export const AuthReducer = (initialState: UserState, action: Action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true,
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload?.user || '',
                token: action.payload?.auth_token || '',
                loading: false,
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: "",
            };
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };
        default:
            throw new Error(`Unhandled action type ${action.type}`);
    }
};
