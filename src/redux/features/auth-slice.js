import { createSlice} from "@reduxjs/toolkit"

//A "slice" is a collection of Redux reducer logic and actions for a single feature in an app, defined together in a single file.


const initialState = {
    value: {
        userName: "",
    }
}


export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action) => {
            return {
                value: {
                    userName: action.payload,
                }
            }
        }
    }
})


export const {logIn,logOut } = auth.actions;
export default auth.reducer;