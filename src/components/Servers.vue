<template>
    <p>Server shit here :)</p>
</template>

<script>

export default ({
    mounted() {
        this.$nextTick(function () {
            this.loadServerData("12321");
        })
    },
    methods: {
        loadServerData: function (ip) {
        }
    }
})
</script>
