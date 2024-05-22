export interface UserStateI{
    user: [],
    error: null | string;
}

export enum UserActionsTypes {
    AUTHORIZE = 'AUTHORIZE'
}

interface AuthAction{
    type: UserActionsTypes.AUTHORIZE,
    payload?: any;
}

export type UserAction = AuthAction;