<script>
import axios from 'axios';
import ProjectCard from "./components/ProjectCard.vue";

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            pagination: {}
        };
    },
    methods: {
        fetchProjects(url) {
            axios.get(url ?? "http://127.0.0.1:8000/api/projects").then((response) => {
                this.projects = response.data.results.data; // salvo la lista dei progetti

                // Salvo i dati della paginazione
                delete response.data.results.data;
                this.pagination = response.data.results;
            });
        },
        getProjectThumbnail(project) {
            // Recupero dal backend l'immagine per ciascun post
            return `http://127.0.0.1:8000/storage/${project.thumbnail}`;
        },
        getIcon(singleTecnology) {
            // Recupero dal backend le icone
            return `http://127.0.0.1:8000/storage/${singleTecnology}`;
        }
    },
    mounted() {
        this.fetchProjects();
    }
}
</script>

<template>
    <header>
        <nav class="container pt-5 pb-2">
            <a class="btn btn-outline-primary" href="http://127.0.0.1:8000/login" role="button">Accedi</a>
            <!-- Link delle pagine -->
            <div class="d-flex align-items-center justify-content-center">
                <p class="me-2"><router-link :to="{name: 'home'}">Home</router-link></p>
                <p><router-link :to="{name: 'projects'}">Lista progetti</router-link></p>
            </div>
        </nav>
    </header>
    <main class="container pt-5 pb-5">
        <!-- "router-view" ci mostra di volta in volta la pagina richiesta -->
        <router-view></router-view>
        <!-- <h1 class="pb-3">Lista progetti</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" :image-url="getProjectThumbnail" :icon-url="getIcon"></ProjectCard>
            </div>
        </div> -->
        <!-- Paginazione -->
        <!-- <div class="pt-3">
            <a class="btn btn-outline-primary m-1" @click="fetchProjects(linkPage.url)" role="button"
                v-for="linkPage in pagination.links" v-html="linkPage.label"></a>
        </div> -->
    </main>
    <footer>Questo è il footer</footer>
</template>

<style lang="scss"></style>