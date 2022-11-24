import axios from "axios";

const API_Key = "47b68e546195f5e97b3850d5fed81fac";

const getWeatherDetails = async (city) => {
    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                units: "metric",
                appid: API_Key,
            },
        }
    );
    return response.data;
};

export default getWeatherDetails;
