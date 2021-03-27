<template>
    <section id="time_widget">
        <TimePlate city="Berlin"/>
    </section>
</template>

<script>
    import TimePlate from "@/components/TimePlate";

    export default {
        name: "Time",
        components: {
            TimePlate
        }
    }
</script>

<style scoped>
    #time_widget {
        box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15);
        border-radius: 2em;
        padding: 1.5em 1em 0.5em;
    }
</style>