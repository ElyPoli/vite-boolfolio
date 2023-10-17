import { createRouter, createWebHistory } from "vue-router";

// Importo le singole pagine
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

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
  // Rotta per lo show del singolo progetto
  {
    path: "/project-detail/:slug", // uri che sarà scritto nel browser
    name: "project-detail", // nome della rotta da usare per creare un link
    component: ProjectDetail, // componente che ritorna l'html della pagina
  },

  //   // ... altre rotte
  //   {
  //     // Show di un singolo post
  //     path: "/posts/:id",
  //     name: "posts.show",
  //     component: PostsShowPage,
  //   },
];

// Creo un'istanza di Router
const router = createRouter({
  history: createWebHistory(), // indica come gestire l'url al cambio pagina
  routes, // passiamo l'array delle rotte
});

// Esporto l'istanta router per poterla usare dentro main.js
export { router };
