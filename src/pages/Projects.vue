<script>
import { store, fetchProjects } from "../store.js";
import ProjectCard from "./../components/ProjectCard.vue";

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchProjects
    },
    mounted() {
        fetchProjects();
    }
}
</script>

<template>
    <h1 class="pb-3">Lista progetti</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3">
        <div class="col" v-for="project in store.projects" :key="project.id">
            <ProjectCard :project="project"></ProjectCard>
        </div>
    </div>
    <!-- Paginazione -->
    <div class="pt-3">
        <a class="btn btn-outline-primary m-1" @click="fetchProjects(linkPage.url)" role="button"
            v-for="linkPage in store.pagination.links" v-html="linkPage.label"
            :class="{ 'active': linkPage.label == store.pagination.current_page }"></a>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.active {
    background-color: $primary-color;
    color: #fff;
}
</style>