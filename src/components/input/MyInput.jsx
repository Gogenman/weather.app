import style from './MyInput.module.scss'

const MyInput = ({inputValue, onHandleChange}) => {
    
    return ( 
        <input 
            placeholder='enter city name'
            value={inputValue} 
            onChange={onHandleChange} 
            className={style.input} 
        />
    );
}
 
export default MyInput;