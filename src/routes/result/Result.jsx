import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import InputText from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';
import InputRange from '../../components/InputRange/InputRange';

import './Result.css';
import { generateImages } from '../../features/images/imagesSlice';
import Option from '../../components/Option/Option';
import DownloadButton from '../../components/DownloadButton/DownloadButton';

const Result = () => {
    const resultImages = useSelector(state => state.images.current);
    const status = useSelector(state => state.images.status)
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { handleSubmit, register, watch, control } = useForm({
        defaultValues: {
            'prompt': searchParams.get('prompt'),
            'resolution': searchParams.get('resolution')
        }
    });

    useEffect(
        () => {
            const {prompt, resolution} = watch();
            if(prompt && resolution){
                dispatch(generateImages({prompt, resolution}));
            }
        },
        []
    )

    const onSubmit = (data) => {
        if(data){
            const{prompt, resolution} = data;
            dispatch(generateImages({prompt, resolution}));
        }
    }

    const clearImageHistory = () => {
        console.log('cleared bih')
    }

    const renderResultImages = () => {
        if(status === 'loading'){
            return [...Array(4)].map( (loader, i) => {
                return (
                    <div className="result__main__content__items__item" key={i}>
                        <div className="result__main__content__items__item__inner">
                            <div className="result__main__content__items__item__loader">
                            </div>
                        </div>
                    </div>
                )
            } )
        }
        else{
            return resultImages.map( (img, i) => {
                return (
                    <div className="result__main__content__items__item" key={i}>
                        <div className="result__main__content__items__item__inner">
                            <img className="result__main__content__items__item__img" src={img.url}/>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div className="result">
            <div className="result__inner">
                <section className="result__main">
                    <div className="result__main__inner">
                        <div className="result__main__form">
                            <div className="result__main__form__inner">
                                <form className="result__main__form__element" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="result__main__form__element__inner">
                                        <div className="result__main__form__element__input">
                                            <div className="result__main__form__element__input__inner">
                                                <InputText
                                                    register={register}
                                                    name="prompt"
                                                    value={watch("prompt")}
                                                />
                                            </div>
                                        </div>
                                        <div className="result__main__form__element__resolution">
                                            <div className="result__main__form__element__resolution__inner">
                                                <Controller
                                                    control={control}
                                                    name="resolution"
                                                    render={ ({field: {onChange, value}})=> (
                                                        <Option
                                                            label="Choose resolution size"
                                                            value={value}
                                                            setValue={onChange}
                                                            options={['256x256', '512x512', '1024x1024']}
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="result__main__form__element__slider">
                                            <div className="result__main__form__element__slider__inner">
                                                <InputRange
                                                    name="nOfImages"
                                                    value={watch('nOfImages')}
                                                    label="Number of images to generate"
                                                    minValue="1"
                                                    maxValue="10"
                                                    register={register}
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="result__main__form__element__submit">
                                            <div className="result__main__form__element__submit__inner">
                                                <Button
                                                    variant="filled"
                                                    text="Generate Again"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="result__main__content">
                            <div className="result__main__content__inner">
                                <div className="result__main__content__heading">
                                    <div className="result__main__content__heading__inner">
                                        <h1 className="heading heading_small">
                                            RESULTS
                                        </h1>
                                    </div>
                                </div>
                                <div className="result__main__content__download-btn">
                                    <div className="result__main__content__download-btn__inner">
                                        <DownloadButton
                                            status={status}
                                            images={resultImages}
                                            label="Download All Images"
                                            variant="text-icon"
                                        />
                                    </div>
                                </div>
                                <div className="result__main__content__items">
                                    <div className="result__main__content__items__inner">
                                        {renderResultImages()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="result__main__attribution">
                            <div className="result__main__attribution__inner">
                                <div>
                                    Powered by Dall-E 2
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="result__sidebar">
                    <div className="result__sidebar__inner">
                        <div className="result__sidebar__heading">
                            <div className="result__sidebar__heading__inner">
                                <div className="result__sidebar__heading__title">
                                    <div className="result__sidebar__heading__title__inner">
                                        <div>
                                            Recent
                                        </div>
                                    </div>
                                </div>
                                <div className="result__sidebar__heading__clear-btn">
                                    <div className="result__sidebar__heading__clear-btn__inner">
                                        <Button
                                            type={'button'}
                                            text={"Clear"}
                                            variant={'ui'}
                                            size={'small'}
                                            onClick={clearImageHistory}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Result;