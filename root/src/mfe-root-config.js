import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/react",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@mfe/react"
    ),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@mfe/app2",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@mfe/app2"
    ),
  activeWhen: ["/app2"],
});

// registerApplication({
//   name: "@mfe/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "@mfe/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
