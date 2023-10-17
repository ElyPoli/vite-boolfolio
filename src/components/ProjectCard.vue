<script>

export default {
    props: {
        project: {
            type: Object,
            required: true
        },
        imageUrl: {
            type: Function,
            required: true
        },
        iconUrl: {
            type: Function,
            required: true
        },
    }
}
</script>

<template>
    <div class="card projects-card">
        <img :src="imageUrl(project)" class="card-img-top" :alt="project.title">
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
                        <img class="my-card-icon" :src="iconUrl(technology.icon)" alt="{{ technology.name }}">
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
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.projects-card {
    --bs-card-title-color: #900c3f;
    --bs-card-border-color: #900c3f;
    transition: box-shadow 0.5s;
    height: 100%;

    &:hover {
        box-shadow: 2px 4px 5px 0px rgba(144, 12, 63, 0.6);
    }

    .card-title {
        text-align: center;
    }

    .card-img-top {
        height: 250px;
        object-fit: cover;
        object-position: center;
    }
}
</style>