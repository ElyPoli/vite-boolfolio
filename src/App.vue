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
        }
    },
    mounted() {
        this.fetchProjects();
    }
}
</script>

<template>
    <main class="container pt-5 pb-5">
        <h1 class="pb-3">Lista progetti</h1>
        <div class="row row-cols-2 row-cols-md-4 gy-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" :image-url="getProjectThumbnail"></ProjectCard>
            </div>
        </div>
        <!-- Paginazione -->
        <div class="pt-3">
            <a class="btn btn-primary m-1" @click="fetchProjects(linkPage.url)" role="button"
                v-for="linkPage in pagination.links" v-html="linkPage.label"></a>
        </div>
    </main>
</template>

<style lang="scss"></style>