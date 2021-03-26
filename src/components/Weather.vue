<template>
    <section id="weather_widget">
        <WeatherPlate city="Passau"/>
    </section>
</template>

<script>
    import WeatherPlate from "@/components/WeatherPlate";

    export default {
        name: "Weather",
        components: {
            WeatherPlate
        }
    }
</script>

<style scoped>

    #weather_widget {
        box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15);
        border-radius: 2em;
        padding: 1.5em 1em 0.5em;
    }

</style>