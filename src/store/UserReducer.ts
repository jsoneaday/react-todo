export const UserType = "UserType";

export interface UserPayload {
  id: string;
  userName: string;
  email: string;
}

export interface UserAction {
    type: string;
    payload: UserPayload | null;
}

export const UserReducer = (
    state: any = null,
    action: UserAction
): UserPayload | null => {
    switch (action.type) {
        case UserType:
            return action.payload;
        default:
            return state;
    }
};