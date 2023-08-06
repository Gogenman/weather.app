import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import style from "./MyForm.module.scss";
import {useState} from 'react'

const MyForm = ({onClick, setInput, inputValue}) => {
    const onHandleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className={style.form}>
            <MyInput inputValue={inputValue} onHandleChange={onHandleChange} type="text" />
            <MyButton onClick={onClick}>search</MyButton>
        </form>
    );
};

export default MyForm;
