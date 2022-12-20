import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slideshowOpen: false,
    images: [],
    currentImage: {}
}

const slideshowSlice = createSlice({
    name: 'slideshow',
    initialState,
    reducers: {
        //visibility
        openSlideshow: (state, action) => {
            const{images, currentImage={}} = action.payload;
            return {...state, slideshowOpen: true, images, currentImage};
        },
        closeSlideshow: (state, action) => {
            return {...state, slideshowOpen: false};
        },
        //currentImage
        setCurrentImage: (state, action) => {
            const {currentImage} = action.payload;
            return {...state, currentImage};
        },
        clearCurrentImage: (state, action) => {
            return {...state, currentImage: {}};
        }
    }

})

export const {openSlideshow, closeSlideshow, setCurrentImage, clearCurrentImage} = slideshowSlice.actions;

export default slideshowSlice;