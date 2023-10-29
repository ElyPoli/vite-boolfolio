<script>
import { store, getProjectThumbnail, getIcon } from "../store.js";

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getProjectThumbnail,
        getIcon,
        // Riduco la lunghezza della descrizione
        truncateDescription(description) {
            if (description.length > 50) {
                return description.substring(0, 50) + '...';
            } else {
                return description;
            }
        },
    }
}
</script>

<template>
    <div v-for="project in store.projects" :key="project.id" @click="selectProject(project)">
        <div class="p-2" v-if="store.selectedProject && store.selectedProject.id === project.id">
            <div class="card">
                <img class="card-image" :src="getProjectThumbnail(project)" :alt="project.title">
                <div class="card-content">
                    <h3 class="card-title">{{ project.title.charAt(0).toUpperCase() + project.title.slice(1) }}</h3>
                    <p class="card-text">{{ truncateDescription(project.description) }}</p>
                </div>
                <div class="my-types-badge mx-auto mb-2" v-if="project.type"
                    :style="{ backgroundColor: project.type.color }">
                    <p class="card-text">{{ project.type.name }}</p>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-center"
                    v-if="project.technologies && project.technologies.length > 0">
                    <p v-for="technology in project.technologies" :key="technology.id">
                        <img class="my-card-icon my-card-icon-medium" :src="getIcon(technology.icon)"
                            alt="{{ technology.name }}">
                    </p>
                </div>
                <div class="card-hover">
                    <!-- Pulsante per visualizzare un progetto  -->
                    <router-link class="btn btn-outline-primary me-2" role="button"
                        :to="{ name: 'project-detail.show', params: { slug: project.slug } }">
                        Scopri di più
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.card {
    width: 300px;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    overflow: visible;
    transition: transform 0.2s;
    margin-bottom: 0;

    .card-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .card-content {
        padding: 10px;

        .card-title {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            color: $primary-color;
            padding: .5rem 0;
        }
    }

    .card-hover {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 15px;
        opacity: 0;
        transform: translateY(100%);
        transition: opacity 0.2s, transform 0.2s;
        text-align: center;

        .btn {
            background-color: #fff;

            &:hover {
                background-color: $primary-color;
            }
        }
    }

    &:hover {
        transform: translateY(-10px);
        padding-bottom: 1rem;

        .card-hover {
            opacity: 1;
            transform: translateY(50%);
        }
    }

    .my-card-icon-medium {
        height: 40px;
        width: 40px;
    }
}
</style>