import { createRouter, createWebHistory } from "vue-router";

// Importo le singole pagine
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Contacts from "./pages/Contacts.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";
import NotFound from "./pages/NotFound.vue";

// Definisco tutte le rotte
const routes = [
  {
    path: "/", // uri che sarà scritto nel browser
    name: "home", // nome della rotta da usare per creare un link
    component: Home, // componente che ritorna l'html della pagina
  },
  {
    path: "/projects", // uri che sarà scritto nel browser
    name: "projects", // nome della rotta da usare per creare un link
    component: Projects, // componente che ritorna l'html della pagina
  },
  {
    path: "/contacts", // uri che sarà scritto nel browser
    name: "contacts", // nome della rotta da usare per creare un link
    component: Contacts, // componente che ritorna l'html della pagina
  },
  // Rotta per la pagina esterna di login
  {
    path: "/login", // uri che sarà scritto nel browser
    name: "login", // nome della rotta da usare per creare un link
    // Redirect alla pagina esterna
    beforeEnter(to, from, next) {
      window.location.href = "http://127.0.0.1:8000/login";
    },
  },
  // Rotta per lo show del singolo progetto
  {
    path: "/project-detail/:slug", // uri che sarà scritto nel browser
    name: "project-detail.show", // nome della rotta da usare per creare un link
    component: ProjectDetail, // componente che ritorna l'html della pagina
  },
  // Rotta generica 404 (verrà utilizzata se l'url che scrive l'utente non corrisponde a nessuno previsto)
  {
    path: "/:pathMatch(.*)*", // uri che sarà scritto nel browser
    name: "not-found", // nome della rotta da usare per creare un link
    component: NotFound, // componente che ritorna l'html della pagina
  }
];

// Creo un'istanza di Router
const router = createRouter({
  history: createWebHistory(), // indica come gestire l'url al cambio pagina
  routes, // passiamo l'array delle rotte
});

// Esporto l'istanta router per poterla usare dentro main.js
export { router };
