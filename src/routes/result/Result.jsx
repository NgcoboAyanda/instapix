import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';

import './Result.css';
import { useSelector } from 'react-redux';

const Result = () => {
    const resultImages = useSelector(state => state.images.current);

    const { handleSubmit, register, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const clearImageHistory = () => {
        console.log('cleared bih')
    }

    const renderResultImages = () => {
        return resultImages.map( (img, i) => {
            return (
                <div className="result__main__content__items__item" key={i}>
                    <div className="result__main__content__items__item__inner">
                        <img className="result__main__content__items__item__img" src={img}/>
                    </div>
                </div>
            )
        })
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