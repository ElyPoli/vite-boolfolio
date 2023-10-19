<script>
import { store, getProjectThumbnail, getIcon } from "../store.js";

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getProjectThumbnail,
        getIcon,
    }
}
</script>

<template>
    <!-- <div class="card projects-card">
        <img :src="getProjectThumbnail(project)" class="card-img-top" :alt="project.title">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ project.title.charAt(0).toUpperCase() + project.title.slice(1) }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="my-types-badge mb-2" v-if="project.type" :style="{ backgroundColor: project.type.color }">
                <p class="card-text">{{ project.type.name }}</p>
            </div>
            <div v-if="project.technologies && project.technologies.length > 0">
                <p class="card-text">Strumenti utilizzati:</p>
                <ul>
                    <li v-for="technology in project.technologies" :key="technology.id">
                        {{ technology.name }}
                        <img class="my-card-icon" :src="getIcon(technology.icon)" alt="{{ technology.name }}">
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
        </div> -->
    <!-- Pulsante per visualizzare un progetto  -->
    <!-- <router-link class="btn btn-outline-primary btn-icons me-2" role="button"
            :to="{ name: 'project-detail.show', params: { slug: project.slug } }">
            <i class="fa-solid fa-expand"></i>
        </router-link>
    </div> -->

    <!-- <div class="my-project-card" style="background-color: purple;">
        Progetto
    </div> -->

    <div class="my-project-card d-flex justify-content-center align-items-center"
        :class="{ 'active': store.selectedProject && store.selectedProject.id === project.id }">
        <div>
            <h5>{{ project.title.charAt(0).toUpperCase() + project.title.slice(1) }}</h5>
            <div class="my-types-badge mb-2" v-if="project.type" :style="{ backgroundColor: project.type.color }">
                <span class="m-0">{{ project.type.name }}</span>
            </div>
            <div v-if="project.technologies && project.technologies.length > 0">
                <div class="d-flex flex-wrap justify-content-center align-items-center text-center">
                    <p v-for="technology in project.technologies" :key="technology.id">
                        <img class="my-card-icon my-card-icon-small" :src="getIcon(technology.icon)"
                            alt="{{ technology.name }}">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.my-project-card {
    height: 200px;
    background-color: $primary-color;
    cursor: pointer;
    border-radius: 5px;

    margin: 1px;
    transition: all 0.3s;

    &:hover {
        background-color: $secondary-color;
    }
}

.active {
    background-color: rgba(0, 156, 144, 0.4);
    box-shadow: inset 1px 1px 16px 0px $secondary-color;

    h5,
    p {
        color: $black;
    }
}

h5,
p {
    color: #fff;
    transition: all 0.3s;
}

.my-card-icon-small {
    height: 30px;
    width: 30px;
}




// .my-project-card {
//     aspect-ratio: 1/1;
//     width: 200px;
//     height: 200px;
// }



// .projects-card {
// --bs-card-title-color: #900c3f;
// --bs-card-border-color: #900c3f;
// transition: box-shadow 0.5s;
// height: 100%;

// &:hover {
// box-shadow: 2px 4px 5px 0px rgba(144, 12, 63, 0.6);
// }

// .card-title {
// text-align: center;
// }

// .card-img-top {
// height: 250px;
// object-fit: cover;
// object-position: center;
// }
// }
</style>