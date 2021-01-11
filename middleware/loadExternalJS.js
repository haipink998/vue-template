export default (context) => {
  const { app } = context;
  console.log('ahiahsdiaisdh', context)
  app.head.script = [
    ...context.app.head.script,
    {
      src: 'js/test.js'
    }
  ];
}