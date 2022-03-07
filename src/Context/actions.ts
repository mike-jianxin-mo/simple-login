const ROOT_URL = "https://secret-hamlet-03431.herokuapp.com";

type loginPayload = {
    user: string,
    password: string
}


type PayLoad = { user: string, token: string}

type Action = 
// {type: ActionTypes, payload: ActionPayload}
//  | { type: 'REQUEST_LOGIN' }
//  | { type: 'LOGIN_SUCCESS', payload: { user: string, auth_token: string} }
//  | { type: 'LOGOUT'}
//  | { type: 'LOGIN_ERROR', error: string}
 {  type: string, 
    error?: string | unknown, 
    payload?: PayLoad }

type ResponseData = {
    user: string,
    token: string,
    errors?: Array<string>
}

export async function loginUser(dispatch: (a: Action) => void, loginPayload: loginPayload) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginPayload),
    };

    try {
        dispatch({ type: "REQUEST_LOGIN" });
        let response = await fetch(`${ROOT_URL}/login`, requestOptions);
        let data: ResponseData = await response.json();

        if (data.user) {
            const {user, token} = data
            dispatch({ type: "LOGIN_SUCCESS", payload: {user, token} });
            localStorage.setItem("currentUser", JSON.stringify(data));
            return data;
        }

        dispatch({ type: "LOGIN_ERROR", error: data.errors![0] });
        console.log(data.errors![0]);
        return;
    } catch (error: unknown) {
        dispatch({ type: "LOGIN_ERROR", error: error });
        console.log(error);
    }
}

export async function logout(dispatch: (a: Action) => void) {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
}
