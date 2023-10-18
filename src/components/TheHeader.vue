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
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/public/vite.svg" alt="immagine temporanea">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <!-- Link delle pagine -->
                        <li class="nav-item" v-for="link in navLinks">
                            <router-link class="nav-link" :class="{ 'active': $route.name === link.route }"
                                :to="{ name: link.route }">{{ link.title }}</router-link>
                        </li>
                    </ul>
                    <!-- Pulsante accedi -->
                    <p class="nav-item m-0">
                        <router-link class="nav-link" :to="{ name: 'login' }">Accedi</router-link>
                    </p>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.navbar-brand {
    img {
        width: 50px;
        height: 50px;
    }
}

.navbar {
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px rgba(144, 12, 63, 0.4);
}

.nav-link {
    color: $black;
    transition: all 0.3s;

    &:hover {
        color: $primary-color;
    }
}

.active {
    color: $primary-color !important;
    font-weight: bold;
}
</style>