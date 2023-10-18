<script>
import axios from 'axios';

export default {
    data() {
        return {
            dataForm: {
                email: "",
                name: "",
                text: ""
            },
            formError: null,
            formSuccess: null,
        }
    },
    methods: {
        onFormSend() {
            axios.post("http://127.0.0.1:8000/api/contacts", this.dataForm)
                .then(response => {
                    this.formSuccess = true;
                    this.formError = null;
                })
                .catch(e => {
                    this.formError = e.response?.data?.message ?? e.message;
                });
        }
    }
}
</script>

<template>
    <div>
        <h1>CONTATTI</h1>
        <div class="alert alert-danger" role="alert" v-if="formError">
            Il form non ha funzionato {{ formError }}
        </div>
        <form class="pt-5" @submit.prevent="onFormSend" v-if="!formSuccess">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="dataForm.email">
            </div>
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input type="text" class="form-control" v-model="dataForm.name">
            </div>
            <div class="mb-3">
                <label class="form-label">Testo</label>
                <textarea class="form-control" v-model="dataForm.text"></textarea>
            </div>
            <button type="submit" class="btn btn-outline-primary">Invia</button>
        </form>
        <div class="alert alert-primary" role="alert" v-else>
            Grazie per avermi contattata
        </div>
    </div>
</template>

<style lang="scss" scoped></style>