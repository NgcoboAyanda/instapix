import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //images that were generated before
    history: [],
    //details on the image being generated or image that has just finished generating
    current: ['https://openailabsprodscus.blob.core.windows.net/private/user-RxkHyB1eG6BJuyRIHto4JC50/generations/generation-ULeiQwMG02S2qXtNcpipVQoS/image.webp?st=2022-12-15T13%3A28%3A29Z&se=2022-12-15T15%3A26%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-15T11%3A22%3A48Z&ske=2022-12-22T11%3A22%3A48Z&sks=b&skv=2021-08-06&sig=kkexnk9SVAXA7YtL/Xc%2B1JqlM0/yOBKs8b37dndjtd0%3D', 'https://openailabsprodscus.blob.core.windows.net/private/user-RxkHyB1eG6BJuyRIHto4JC50/generations/generation-6nM3iqyy7eWQue4ftvvQGPuh/image.webp?st=2022-12-15T13%3A28%3A29Z&se=2022-12-15T15%3A26%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-15T11%3A22%3A48Z&ske=2022-12-22T11%3A22%3A48Z&sks=b&skv=2021-08-06&sig=Xol9LsrG17Pxe/nyLLaFA3CXBTL20RkzmPIQnv9itic%3D', 'https://openailabsprodscus.blob.core.windows.net/private/user-RxkHyB1eG6BJuyRIHto4JC50/generations/generation-o1mPVVM4TRd3PayPzHqF687O/image.webp?st=2022-12-15T13%3A28%3A29Z&se=2022-12-15T15%3A26%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-15T11%3A22%3A48Z&ske=2022-12-22T11%3A22%3A48Z&sks=b&skv=2021-08-06&sig=/cFkzAagMky9cyiPyWsnSOaF/iiOYjiYOU6o8ufrkdU%3D', 'https://openailabsprodscus.blob.core.windows.net/private/user-RxkHyB1eG6BJuyRIHto4JC50/generations/generation-rcpzk9UmmcezT2wHIIuiq6dm/image.webp?st=2022-12-15T14%3A26%3A31Z&se=2022-12-15T16%3A24%3A31Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-15T14%3A46%3A19Z&ske=2022-12-22T14%3A46%3A19Z&sks=b&skv=2021-08-06&sig=Me/ErcS3NVq9X6JiQLdOqfVUyL0HHF4xw6HDLUTECZM%3D'],
    status: 'idle'
}

const generateImageSlice = createSlice({
    name: 'generateImage',
    initialState,
    reducers: {

    }
})

export default generateImageSlice;