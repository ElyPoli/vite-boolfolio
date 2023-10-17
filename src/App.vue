<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
    }
}
</script>

<template>
    <TheHeader></TheHeader>
    <main class="container pt-5 pb-5">
        <!-- "router-view" ci mostra di volta in volta la pagina richiesta -->
        <router-view></router-view>
    </main>
    <TheFooter></TheFooter>
</template>

<style lang="scss"></style>