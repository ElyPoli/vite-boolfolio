import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    menuLinks: [
        {
            title: "Home",
            route: "home",
        },
        {
            title: "Lista progetti",
            route: "projects",
        }
    ],
    projects: [],
    pagination: {}
});

/**
 * Effettua una richiesta GET per recuperare la lista dei progetti
 * @param {String} url 
 */
export function fetchProjects(url) {
    axios.get(url ?? "http://127.0.0.1:8000/api/projects").then((response) => {
        store.projects = response.data.results.data; // salvo la lista dei progetti

        // Salvo i dati della paginazione
        delete response.data.results.data;
        store.pagination = response.data.results;
    });
}

/**
 * Restituisce l'URL dell'immagine del progetto recuperata dal backend
 * @param {Object} project 
 * @returns {String}
 */
export function getProjectThumbnail(project) {
    return `http://127.0.0.1:8000/storage/${project.thumbnail}`;
}

/**
 * Restituisce l'URL delle icone associate ad un progetto recuperate dal backend
 * @param {String} singleTecnology 
 * @returns {String}
 */
export function getIcon(singleTecnology) {
    return `http://127.0.0.1:8000/storage/${singleTecnology}`;
}


