<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-for="project in store.projects"
        :key="project.id" @click="selectProject(project)">
        <div v-if="store.selectedProject && store.selectedProject.id === project.id">
            <h2>{{ store.selectedProject.title.charAt(0).toUpperCase() + store.selectedProject.title.slice(1) }}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

</style>