export default ({ app: { head }}) => {
  head.script.push({
    src: 'js/main.js',
    async: false,
    defer: true
  })
}