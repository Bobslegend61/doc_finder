<template>
    <header>
        <div id="nav">
            <router-link to="/doc_finder">Home</router-link> |
            <router-link to="/doc_finder/about">About</router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: 'app-header'
}
</script>
<style scoped>
    header {
        text-align: center;
        color: #f4f4f4;
        padding: 30px;
        background: rgb(8, 8, 8);
        text-transform: uppercase;
    }

    a {
        color: #f4f4f4;
    }

    .router-link-exact-active {
        color: #032DFF;;
    }
</style>

