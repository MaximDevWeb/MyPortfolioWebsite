export default defineNuxtRouteMiddleware((to) => {
  to.meta.pageTransition = {
    name: "zoom",
  };
});
