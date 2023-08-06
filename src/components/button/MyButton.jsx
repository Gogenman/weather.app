import style from './MyButton.module.scss'

const MyButton = ({onClick}) => {
    return ( 
        <button className={style.button} onClick={onClick}>search</button>
    );
}
 
export default MyButton;