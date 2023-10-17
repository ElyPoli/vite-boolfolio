<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: {}
        };
    },
    methods: {
        fetchSingleProject() {
            // Creo l'url del singolo progetto che è stato aperto
            let url = "http://127.0.0.1:8000/api/projects/";

            // Nella chiamata aggiungo all'url lo slug del singolo progetto
            axios.get(url + this.$route.params.slug).then((response) => {
                this.project = response.data;
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
        this.fetchSingleProject();
    }
}
</script>

<template>
    <div class="my-border">
        <div class="row row-cols-1 row-cols-md-2 gy-2 align-items-center">
            <div class="col">
                <div class="d-flex flex-wrap align-items-center pb-3">
                    <h1 class="me-5">{{ project.title }}</h1>
                </div>
                <p>{{ project.description ? project.description : '' }}</p>
                <div class="my-types-badge mb-2" v-if="project.type" :style="{ backgroundColor: project.type.color }">
                    <p class="card-text">{{ project.type.name }}</p>
                </div>
                <div v-if="project.technologies && project.technologies.length > 0">
                    <p class="card-text fst-italic mb-0">Strumenti utilizzati:</p>
                    <ul>
                        <li v-for="technology in project.technologies" :key="technology.id">
                            {{ technology.name }}
                            <img class="my-card-icon" :src="getIcon(technology.icon)" alt="{{ technology.name }}">
                        </li>
                    </ul>
                </div>
                <p>
                    <a href="{{ project.repository_link }}">Guarda il codice nella repository</a>
                </p>
                <p>
                    <a href="{{ project.url }}">Guarda il sito online</a>
                </p>
            </div>
            <div class="col">
                <img :src="getProjectThumbnail(project)" class="w-100 rounded-5 img-border" :alt="project.title">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>