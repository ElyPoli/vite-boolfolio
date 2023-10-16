<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            pagination: {}
        };
    },
    methods: {
        fetchProjects() {
            let url = "http://127.0.0.1:8000/api/projects";
            axios.get(url).then((response) => {
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
                <div class="card">
                    <img :src="getProjectThumbnail(project)" class="card-img-top" :alt="project.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <p class="card-text" v-if="project.type">{{ project.type.name }}</p>
                        <div v-if="project.technologies && project.technologies.length > 0">
                            <p class="card-text">Strumenti utilizzati:</p>
                            <ul>
                                <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}
                                </li>
                            </ul>
                        </div>
                        <ul class="card-text">
                            <li>
                                <a :href="project.repository_link">Guarda la repository</a>
                            </li>
                            <li>
                                <a :href="project.url">Guarda il sito online</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss"></style>