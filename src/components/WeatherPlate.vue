<template>
    <article class="weather-plate">
        <h2>{{ city }}</h2>
        <div class="temperature-module">
            <img alt="icon" :src="`http://openweathermap.org/img/w/${icon}.png`" />
            <p><span class="temperature-text">{{ temperature }}</span><span class="temperature-unit">C</span></p>
        </div>
        <div class="details-module">
            <p class="humidity-module">Humidity: {{ humidity }}%</p>
            <p class="wind-module">Wind: {{ wind }} kph E</p>
            <p class="feels-module">Feels like: <span>{{ feels }}</span><span>C</span></p>
        </div>
    </article>
</template>

<script>
    export default {
        name: "WeatherPlate",
        props: {
            city: String,
            temperature: String,
            humidity: Number,
            wind: Number,
            feels: String,
            icon: String
        },
        created() {
            console.log("Created: " + this.city);
        },
        mounted() {
            this.temperature = '2°';
            this.humidity = 89;
            this.wind = 2;
            this.feels = '3°';
            this.icon = '10d';
        }
    }
</script>

<style scoped>
    .weather-plate {
        width: 100%;
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

</style>