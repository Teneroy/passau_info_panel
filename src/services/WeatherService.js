// @ts-ignore
import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/weather';

class WeatherService {

    static getCurrentWeatherByCity(city) {
        return axios.get(url + '?city=' + city);
    }
}

export default WeatherService;