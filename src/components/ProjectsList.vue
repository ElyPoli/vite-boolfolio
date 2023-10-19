<script>
import { store } from "../store.js";
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
        selectProject(project) {
            store.selectedProject = project;
        },
    }
}
</script>

<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col p-0" v-for="project in store.projects" :key="project.id">
            <ProjectCard :project="project" @click="selectProject(project)"></ProjectCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>