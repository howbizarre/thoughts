export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/" || !to.path.endsWith("/")) return;

  const nextPath = to.path.replace(/\/+$/, "") || "/";
  const nextRoute = { path: nextPath };

  return navigateTo(nextRoute, { redirectCode: 301 });
});
