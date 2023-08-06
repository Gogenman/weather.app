import style from "./WeatherContent.module.scss";
import Spinner from "../spinner/Spinner";
import wind from "../../assets/wind.png";
import press from "../../assets/pressure.png";
import notFoundPic from '../../assets/no-results.png';

const WeatherContent = ({ weather }) => {
    const contentView = () => {
        const { name, temp, feels_like, pressure, speed, descr, icon } =
            weather.weather;
        
        return (
                <div className={style.inner}>
                    <div className={style.left}>
                        <h1 className={style.city}>{name}</h1>
                        <p className={style.degree}>
                            {Math.round(temp - 273.15)}
                            <sup>o</sup>C
                        </p>
                        <p className={style.feels}>
                            
                            feels like: {Math.round(feels_like - 273.15)}
                            <sup>o</sup>C
                        </p>
                    </div>

                    <div className={style.right}>
                        <div className={style.iconBlock}>
                            <div className={style.iconBlockImg}>
                                <img style={{width: '60px'}} src={icon} alt="weather icon" />
                            </div>
                            <div className={style.iconBlockDescr}>
                                <p>{descr}</p>
                            </div>
                            
                        </div>

                        <div className={style.iconBlock}>
                            <div className={style.iconBlockImg}>
                                <img style={{width: '30px'}} src={wind} alt="wind" />
                            </div>
                            <div className={style.iconBlockDescr}>
                                <p>{Math.round(speed)} m/s</p>
                            </div>
                            
                        </div>

                        <div className={style.iconBlock}>
                            <div className={style.iconBlockImg}>
                                <img style={{width: '40px'}} src={press} alt="pressure" />
                            </div>
                            <div className={style.iconBlockDescr}>
                                <p>{pressure} ppm</p>
                            </div>
                            
                        </div>

                        
                    </div>
                </div>

        );
    };

    const notFoundView = () => {
        return (
            <div className={style.notFoundContainer}>
                <img src={notFoundPic} alt="" />
            </div>
        )
    }

    const { isLoading, error } = weather;

    return (
        <div className={style.weatherMain}>
            
            <div className="container">
                
                {isLoading ? <Spinner /> : null}
                {error ? notFoundView() : null}
                {!(isLoading || error) ? contentView() : null}
            </div>
        </div>
    );
};

export default WeatherContent;
