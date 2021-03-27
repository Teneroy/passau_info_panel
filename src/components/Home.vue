<template>
    <main>
        <Weather/>
        <Time/>
    </main>
</template>

<script>
    import Weather from "@/components/Weather";
    import Time from "@/components/Time";

    export default {
        name: 'Header',
        components: {
            Time,
            Weather
        }
    }
</script>

<style scoped>
    main {
        display: grid;
        max-width: 1080px;
        margin: auto;
        grid-template-columns: 40%;
        grid-template-rows: auto;
    }
</style>