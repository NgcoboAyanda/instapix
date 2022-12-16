import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiBaseUrl = 'http://localhost:8000'

const initialState = {
    //images that were generated before
    history: [],
    //details on the image being generated or image that has just finished generating
    current: [],
    status: 'idle'
}

export const generateImages = createAsyncThunk(
    'images/generateImages',
    async (formdata, thunkAPI) => {
        const response = await fetch(`${apiBaseUrl}/images/generate/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formdata, numberOfImages: 4})
        });
        if(response.status === 200){
            const images = await response.json();
            const {setCurrent} = imagesSlice.actions
            thunkAPI.dispatch(
                setCurrent([...images])
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

export default imagesSlice;