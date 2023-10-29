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
    <div class="my-project-card d-flex justify-content-center align-items-center"
        :class="{ 'active': store.selectedProject && store.selectedProject.id === project.id }">
        <div>
            <img class="project-img" :src="getProjectThumbnail(project)" :alt="project.title">
            <h5>{{ project.title.charAt(0).toUpperCase() + project.title.slice(1) }}</h5>
            <div class="my-types-badge mx-auto mb-2" v-if="project.type" :style="{ backgroundColor: project.type.color }">
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
    height: 150px;
    background-color: rgba(144, 12, 63, 0.3);
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    margin: 1px;
    transition: all 0.3s;

    &:hover {
        background-color: rgba(0, 156, 143, 0.4);
    }
}

.project-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 5px;
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
</style>