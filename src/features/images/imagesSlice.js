import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiBaseUrl = 'https://instapixapi.onrender.com';
//const apiBaseUrl = 'http://localhost:8000'

const initialState = {
    //images that were generated before
    searchHistory: [],
    //details on the image being generated or image that has just finished generating
    current: [],
    status: 'idle',
    error: {}
}

export const generateImages = createAsyncThunk(
    'images/generateImages',
    async (formdata, thunkAPI) => {
        //clearing current images first
        const {clearCurrent} = imagesSlice.actions;
        thunkAPI.dispatch( clearCurrent() );
        //API request to InstapixAPI
        const response = await fetch(`${apiBaseUrl}/images/generate/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.REACT_APP_API_KEY
            },
            body: JSON.stringify({...formdata})
        });
        if(response.status === 200){
            let images = await response.json();
            const {setCurrent, addToSearchHistory} = imagesSlice.actions
            //adding the images to state
            thunkAPI.dispatch(
                setCurrent([...images])
            );
            //adding the images to history
            //generating unique id for each search
            let id = "id" + Math.random().toString(16).slice(2);
            const {prompt, resolution} = formdata;
            thunkAPI.dispatch(
                addToSearchHistory({id, prompt, resolution, images: [...images]})
            )
        }
        else {
        }
    }
)


const imagesSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        //sets state.current to an array containing the images that have just been generated
        setCurrent: (state, action) => {
            return {...state, current: action.payload};
        },
        clearCurrent: (state, action)=> {
            return {...state, current: []};
        },
        //history
        addToSearchHistory: (state, action) => {
            const newSearchHistory = [...state.searchHistory, action.payload];
            return {...state, searchHistory: newSearchHistory};
        },
        removeFromSearchHistory: (state, action) => {
            let history = [...state.searchHistory];
            const{id} = action.payload;
            history = history.filter(searchObj=> searchObj.id !== id);
            return {...state, searchHistory: history};
        },
        loadSearchHistory: (state, action) => {
            const {sessionSearchHistory} = action.payload;
            return {...state, searchHistory: sessionSearchHistory};
        },
        clearSearchHistory: (state, action) => {
            return {...state, searchHistory: []};
        },
        //errors
        clearError: (state) => {
            return {...state, error:{}};
        }
    },
    extraReducers: builder => {
        builder
        //generateImages
        .addCase(generateImages.pending, (state)=>{
            return {...state, status: 'loading'}
        })
        .addCase(generateImages.fulfilled, (state)=>{
            return {...state, status: 'idle'}
        })
        .addCase(generateImages.rejected, (state) => {
            const error = { 
                code: 408,
                message: 'A network error occured, please try again!' 
            };
            return {...state, status: 'idle', error}
        })

    }
})

export const {removeFromSearchHistory, loadSearchHistory, clearSearchHistory, clearError} =imagesSlice.actions;

export default imagesSlice;