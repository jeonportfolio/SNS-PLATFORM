const defaultUserInfoReducer = {
    list:[]
}

export const UserInfoReducer = (state=defaultUserInfoReducer, action:any) => {
    return{
        ...state
    }
}