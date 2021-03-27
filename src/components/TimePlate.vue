<template>
    <article class="time-plate">
        <h2>{{city}}</h2>
        <div class="time-details">
            <p class="time">{{time}}</p>
        </div>
    </article>
</template>

<script>
    export default {
        name: "TimePlate",
        props: {
            city: String,
            time: String
        },
        methods: {
            startTime() {
                window.setInterval(() => {
                    const now = new Date();
                    const convertedTime = this.convertTZ(now, 'Europe/Berlin');
                    this.time = convertedTime.getHours() + ":" + convertedTime.getMinutes();
                }, 1000);
            },
            convertTZ(date, tzString) {
                return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
            }
        },
        mounted() {
            this.startTime();
        }
    }
</script>

<style scoped>

</style>