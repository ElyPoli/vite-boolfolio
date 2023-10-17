<script>
export default {
    data() {
        return {
            navLinks: [
                {
                    title: "Home",
                    route: "home",
                },
                {
                    title: "Lista progetti",
                    route: "projects",
                }
            ],
        };
    },
}
</script>

<template>
    <header>
        <nav class="container pt-5 pb-2">
            <p class="me-2"><router-link :to="{ name: 'login' }">Accedi</router-link></p>
            <!-- Link delle pagine -->
            <div class="d-flex align-items-center justify-content-center">
                <p class="m-2" v-for="link in navLinks">
                    <router-link :to="{ name: link.route }">{{ link.title }}</router-link>
                </p>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>