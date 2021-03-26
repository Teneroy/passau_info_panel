<template>
    <main>
        <Weather/>
    </main>
</template>

<script>
    import Weather from "@/components/Weather";

    export default {
        name: 'Header',
        components: {
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
    }
</style>