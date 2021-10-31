import { createApp } from './app';

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (matchedComponents.length) {
        return reject({ code: 404 });
      }

      // this 'rendered' hook is called when the app has finished rendering
      context.rendered = () => {
        // when we attach the state to the context,
        // the state will automatically be serialized
        // and injected into the HTML as 'window.__INITIAL_STATE__'.
        context.state = store.state;
      };

      resolve(app);
    }, reject);
  });
};
