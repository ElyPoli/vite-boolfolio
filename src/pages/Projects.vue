<script>
import { store, fetchProjects } from "../store.js";
import ProjectsList from "./../components/ProjectsList.vue";
import ProjectPreview from "./../components/ProjectPreview.vue";

export default {
    components: {
        ProjectsList,
        ProjectPreview
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
    <div class="container">
        <h1 class="pb-3 text-center">Lista progetti</h1>
        <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla ullam quaerat sapiente necessitatibus
            aperiam, quas dicta dolore consectetur adipisci, libero assumenda soluta, magnam nam illo natus voluptatum ipsa
            voluptatibus.
        </p>

        <div class="row row-cols-1 row-cols-sm-2 gy-2 text-center">
            <!-- Sezione miniature progetti -->
            <div class="col-12 col-sm-6">
                <ProjectsList></ProjectsList>

                <!-- Paginazione -->
                <div class="pt-3">
                    <a class="btn btn-outline-primary m-1" @click="fetchProjects(linkPage.url)" role="button"
                        v-for="linkPage in store.pagination.links" v-html="linkPage.label"
                        :class="{ 'active-page': linkPage.label == store.pagination.current_page }"></a>
                </div>
            </div>

            <!-- Colonna di margine -->
            <div class="col-0 col-sm-1"></div>

            <!-- Sezione anteprima progetto -->
            <div class="col-12 col-sm-5">
                <div class="my-project-preview-box">
                    <ProjectPreview></ProjectPreview>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.active-page {
    background-color: $primary-color;
    color: #fff;
}

.my-project-preview-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 156, 144, 0.05);
    box-shadow: inset 1px 1px 16px 0px rgba(0, 156, 144, 0.3);
}
</style>