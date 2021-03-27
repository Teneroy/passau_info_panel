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

</style>