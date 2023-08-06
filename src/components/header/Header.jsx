import MyForm from '../form/MyForm';
import style from './Header.module.scss';

const Header = ({onClick, inputValue, setInput}) => {
    return ( 
        <header className={style.header}>
            <div className="container">
                <div className={style.inner}>
                    <div className={style.title}>
                        weather.app
                    </div>
                    <MyForm 
                        onClick={onClick}
                        inputValue={inputValue}
                        setInput={setInput}
                    />
                </div>
            </div>
        </header>
    );
}
 
export default Header;