import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiBaseUrl = 'http://localhost:8000'

const initialState = {
    //images that were generated before
    searchHistory: [],
    //details on the image being generated or image that has just finished generating
    current: [],
    status: 'idle'
}

export const generateImages = createAsyncThunk(
    'images/generateImages',
    async (formdata, thunkAPI) => {
        //clearing current images first
        const {clearCurrent} = imagesSlice.actions;
        thunkAPI.dispatch( clearCurrent() )
        const response = await fetch(`${apiBaseUrl}/images/generate/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formdata, numberOfImages: 4})
        });
        if(response.status === 200){
            const images = await response.json();
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
            return {...state, searchHistory: [...state.searchHistory, action.payload]};
        },
        removeFromSearchHistory: (state, action) => {
            const history = [...state.searchHistory];
            const {id} = action.payload
            const indexOfObject = history.findIndex(object => {
            return object.id === id;
            });
            history.splice(indexOfObject, 1);
            return {...state, searchHistory: history};
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
        

    }
})

export const {removeFromSearchHistory} =imagesSlice.actions;

export default imagesSlice;