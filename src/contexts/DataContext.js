import { createContext, useEffect, useReducer } from "react";
import { cuisineData, restaurantsData } from "../api/data";

export const DataContext = createContext();

const reducerFuction = (state, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state, data: restaurantsData, cuisineData: cuisineData
            }
        case "USER_INPUT":
            return {
                ...state, userInput: action.payload
            }
        default:
            break;
    }
}

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFuction, {
        data: [],
        cuisineData: [],
        userInput: ''
    });


    useEffect(() => {
        dispatch({type: 'FETCH_DATA'});
    }, []);

    const filterData = state.userInput ? state.data.filter(({description}) => description.includes(state.userInput)) : []

    console.log(filterData);

    return <DataContext.Provider value={{ state, dispatch, filterData }}>{children}</DataContext.Provider>
}