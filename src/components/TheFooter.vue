<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center my-border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                        <img src="/public/vite.svg" alt="immagine temporanea">
                    </a>
                </li>
                <!-- Link delle pagine -->
                <li class="nav-item" v-for="link in store.menuLinks">
                    <router-link class="nav-link" :class="{ 'active': $route.name === link.route }"
                        :to="{ name: link.route }">{{ link.title }}</router-link>
                </li>
            </ul>
            <p class="text-center text-body-secondary">&copy; 2023</p>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.nav-link {
    color: $black;
    transition: all 0.3s;
    padding: .5rem;

    &:hover {
        color: $primary-color;
    }
}

.my-border-bottom {
    border-bottom: var(--bs-border-width) var(--bs-border-style) rgba(144, 12, 63, 0.4);
}

.active {
    color: $primary-color !important;
    font-weight: bold;
}
</style>