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
    }
}
</script>

<template>
    <div class="card">
        <img :src="imageUrl(project)" class="card-img-top" :alt="project.title">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text" v-if="project.type">{{ project.type.name }}</p>
            <div v-if="project.technologies && project.technologies.length > 0">
                <p class="card-text">Strumenti utilizzati:</p>
                <ul>
                    <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}
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

<style lang="scss" scoped></style>