<template>
    <article class="weather-plate">
        <h2>{{ city }}</h2>
        <div class="temperature-module">
            <img alt="icon" :src="`http://openweathermap.org/img/w/${icon}.png`" />
            <p><span class="temperature-text">{{ temperatureView }}</span><span class="temperature-unit">C</span></p>
        </div>
        <div class="details-module">
            <p class="humidity-module">Humidity: {{ humidity }}%</p>
            <p class="wind-module">Wind: {{ wind }} kph E</p>
            <p class="feels-module">Feels like: <span>{{ feelsLikeView }}</span><span>C</span></p>
        </div>
    </article>
</template>

<script>
    import WeatherService from "@/services/WeatherService.js";

    export default {
        name: "WeatherPlate",
        props: {
            city: String,
            temperature: Number,
            humidity: Number,
            wind: Number,
            feelsLike: Number,
            icon: String
        },
        computed: {
            temperatureView: function () {
                return Math.round(this.temperature) + '°';
            },
            feelsLikeView: function () {
                return Math.round(this.feelsLike) + '°';
            }
        },
        created() {
            this.temperature = 0;
            this.humidity = 0;
            this.wind = 0;
            this.feelsLike = 0;
            this.icon = '';
        },
        mounted() {
            this.updateWeatherByCity(this.city);
        },
        methods: {
            updateWeatherByCity(city) {
                WeatherService.getCurrentWeatherByCity(city).then(res => {
                    const data = res.data;
                    this.temperature = data.temperature;
                    this.humidity = data.humidity;
                    this.wind = data.wind;
                    this.feelsLike = data.feels_like;
                    this.icon = data.icon;
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 0;
    }

    .weather-plate {
        width: 100%;
        box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15);
        border-radius: 2em;
        padding: 1.5em 1em 0.5em;
        display: inline-block;
    }

    .weather-plate h2 {
        text-align: left;
    }

    .weather-plate>div {
        width: 50%;
        float: left;
    }

    .details-module>p {
        margin-top: 0;
        margin-bottom: 0.7em;
    }

    .temperature-module>img {
        float: left;
    }

    .temperature-module>p {
        float: left;
        margin: 0;
    }

    .temperature-text {
        font-size: 3em;
    }

    .temperature-unit {
        font-size: 2em;
        vertical-align: top;
    }

    .details-module {
        text-align: left;
    }

</style>