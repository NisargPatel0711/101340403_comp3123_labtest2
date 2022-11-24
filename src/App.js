import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";
import WeatherData from "./WeatherData";
import backgroundImage from "./background.jpg";

function App() {
    const [city, setCity] = React.useState("Toronto");
    const [data, setData] = React.useState();

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = await WeatherData(city);
        setData(data);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div
                className="container d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
            >
                <div className="" style={{ width: "60%" }}>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control form-control-lg me-2"
                            type="text"
                            placeholder="Enter City Name Here..."
                            aria-label="Search"
                            value={city}
                            onChange={(x) => setCity(x.target.value)}
                        />
                        <button
                            className="btn btn-success"
                            type="submit"
                            onClick={(e) => onSubmit(e)}
                        >
                            <i class="bi bi-search"></i>
                            Search
                        </button>
                    </form>
                    <div className="p-2 mt-4 bg-light bg-opacity-75 shadow rounded-2">
                        {data ? (
                            <WeatherInfo data={data} />
                        ) : (
                            "Please enter correct city..."
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
