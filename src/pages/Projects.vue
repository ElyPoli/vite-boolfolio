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

        <div class="row row-cols-1 row-cols-md-2 gy-2 text-center">

            <!-- Sezione anteprima progetto -->
            <div class="col-12 col-md-5">
                <div class="my-project-preview-box">
                    <ProjectPreview></ProjectPreview>
                </div>
            </div>

            <!-- Colonna di margine -->
            <div class="col-0 col-md-1"></div>

            <!-- Sezione miniature progetti -->
            <div class="col-12 col-md-6 order-md-first">
                <ProjectsList></ProjectsList>

                <!-- Paginazione -->
                <div class="pt-3">
                    <a class="btn btn-outline-primary m-1" @click="fetchProjects(linkPage.url)" role="button"
                        v-for="linkPage in store.pagination.links" v-html="linkPage.label"
                        :class="{ 'active-page': linkPage.label == store.pagination.current_page }"></a>
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
}
</style>