import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slideshowOpen: false,
    images: [],
    index:0
}

const slideshowSlice = createSlice({
    name: 'slideshow',
    initialState,
    reducers: {
        //visibility
        openSlideshow: (state, action) => {
            const{images, index=0} = action.payload;
            return {...state, slideshowOpen: true, images, index};
        },
        closeSlideshow: (state, action) => {
            return {...state, slideshowOpen: false};
        },
        //index
        goToNextImage: (state, action) => {
            let {images, index} = state;
            if(index < images.length-1){
                index++;
            }
            else{
                index=0
            }
            return {...state, index};
        },
        goToPreviousImage: (state, action) => {
            let {images, index} = state;
            if(index > 0){
                index--;
            }
            else{
                index=images.length-1;
            }
            return {...state, index};
        },
        goToSpecificImage: (state, action) => {
            const {index} = action.payload;
            return {...state, index};
        }
    }

})

export const {openSlideshow, closeSlideshow, goToNextImage, goToPreviousImage, goToSpecificImage} = slideshowSlice.actions;

export default slideshowSlice;