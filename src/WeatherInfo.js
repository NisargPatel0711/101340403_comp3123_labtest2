const WeatherComponent = ({ icon, name, value }) => {
    return (
        <div className="col-4 d-flex p-3">
            <div className="d-flex justify-content-center align-items-center">
                <i className={icon} style={{ fontSize: "2rem" }}></i>
            </div>
            <div className="ms-3">
                <p className="m-0 fw-semibold" style={{ fontSize: "0.8rem" }}>
                    {name}
                </p>
                <p className="m-0 fw-bold" style={{ fontSize: "1rem" }}>
                    {value}
                </p>
            </div>
        </div>
    );
};

export default function Weather(props) {
    const weather = props.data;
    const Time = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
            timeStamp * 1000
        ).getMinutes()}`;
    };

    return (
        <>
            <h4 className="text-center">
                {weather.name}, {weather.sys.country}
            </h4>
            <div className="p-2 d-flex">
                <div className="pe-3 border-end border-dark d-flex justify-content-center align-items-center">
                    <div className="d-flex p-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                alt={weather?.weather[0].description}
                                style={{ height: "100px", width: "100px" }}
                            />
                        </div>
                        <div className="ms-3">
                            <p
                                className="m-0 fw-semibold"
                                style={{ fontSize: "1rem" }}
                            >
                                {weather.weather[0].description}
                            </p>
                            <p
                                className="m-0 fw-bold"
                                style={{ fontSize: "2rem" }}
                            >
                                {Math.floor(weather.main.temp)}&deg;C
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ps-3" style={{ width: "100%" }}>
                    <div className="row">
                        <WeatherComponent
                            icon={"bi bi-sunrise-fill"}
                            name="Sunrise"
                            value={Time(weather.sys["sunrise"]) + " AM"}
                        />
                        <WeatherComponent
                            icon={"bi bi-sunset-fill"}
                            name="Sunset"
                            value={Time(weather.sys["sunset"]) + " PM"}
                        />
                        <WeatherComponent
                            icon={"bi bi-clouds-fill"}
                            name="Clouds"
                            value={weather.clouds.all}
                        />
                    </div>
                    <div className="row">
                        <WeatherComponent
                            icon={"bi bi-droplet-half"}
                            name="Humidity"
                            value={weather.main.humidity}
                        />
                        <WeatherComponent
                            icon={"bi bi-wind"}
                            name="Wind"
                            value={weather.wind.speed}
                        />
                        <WeatherComponent
                            icon={"bi bi-speedometer2"}
                            name="Pressure"
                            value={weather.main.pressure}
                        />
                    </div>
                    <div className="row">
                        <WeatherComponent
                            icon={"bi bi-thermometer-half"}
                            name="Feels Like"
                            value={Math.floor(weather.main.feels_like) + "°C"}
                        />
                        <WeatherComponent
                            icon={"bi bi-thermometer-sun"}
                            name="Max Temp"
                            value={Math.floor(weather.main.temp_max) + "°C"}
                        />
                        <WeatherComponent
                            icon={"bi bi-thermometer-snow"}
                            name="Min Temp"
                            value={Math.floor(weather.main.temp_min) + "°C"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
