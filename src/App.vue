<script>
export default {
}
</script>

<template>
    <header>
        <nav class="container pt-5 pb-2">
            <p class="me-2"><router-link :to="{ name: 'login' }">Accedi</router-link></p>
            <!-- Link delle pagine -->
            <div class="d-flex align-items-center justify-content-center">
                <p class="me-2"><router-link :to="{ name: 'home' }">Home</router-link></p>
                <p><router-link :to="{ name: 'projects' }">Lista progetti</router-link></p>
            </div>
        </nav>
    </header>
    <main class="container pt-5 pb-5">
        <!-- "router-view" ci mostra di volta in volta la pagina richiesta -->
        <router-view></router-view>
    </main>
    <footer class="container pt-5 pb-2">Questo è il footer</footer>
</template>

<style lang="scss"></style>