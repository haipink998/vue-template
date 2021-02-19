export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: 'spa',
  head: {
    title: 'proj_adiary',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ie=edge', "http-equiv": 'x-ua-compatible' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700' },
      { rel: 'apple-touch-icon' , href: 'apple-touch-icon.png'},
      { rel: 'stylesheet', href: 'bower_components/select2/dist/css/select2.min.css'},
      { rel: 'stylesheet', href: 'bower_components/bootstrap-daterangepicker/daterangepicker.css'},
      { rel: 'stylesheet', href: 'bower_components/dropzone/dist/dropzone.css'},
      { rel: 'stylesheet', href: 'bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css'},
      { rel: 'stylesheet', href: 'bower_components/fullcalendar/dist/fullcalendar.min.css'},
      { rel: 'stylesheet', href: 'bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'},
      { rel: 'stylesheet', href: 'bower_components/slick-carousel/slick/slick.css'},
      { rel: 'stylesheet', href: 'css/main.css'},
    ],
    script: [
      {
        src:'bower_components/jquery/dist/jquery.min.js', body: true 
      },
      {
        src:'bower_components/popper.js/dist/umd/popper.min.js', body: true
      },
      {
        src:'bower_components/moment/moment.js', body: true
      },
      {
        src:'bower_components/chart.js/dist/Chart.min.js', body: true
      },
      {
        src:'bower_components/select2/dist/js/select2.full.min.js', body: true
      },
      {
        src:'bower_components/jquery-bar-rating/dist/jquery.barrating.min.js', body: true
      },
      {
        src:'bower_components/ckeditor/ckeditor.js', body: true
      },
      {
        src:'bower_components/bootstrap-validator/dist/validator.min.js', body: true
      },
      {
        src:'bower_components/bootstrap-daterangepicker/daterangepicker.js', body: true
      },
      {
        src:'bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js', body: true
      },
      {
        src:'bower_components/dropzone/dist/dropzone.js', body: true
      },
      {
        src:'bower_components/editable-table/mindmup-editabletable.js', body: true
      },
      {
        src:'bower_components/datatables.net/js/jquery.dataTables.min.js', body: true
      },
      {
        src:'bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js', body: true
      },
      {
        src:'bower_components/fullcalendar/dist/fullcalendar.min.js', body: true
      },
      {
        src:'bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js', body: true
      },
      {
        src:'bower_components/tether/dist/js/tether.min.js', body: true
      },
      {
        src:'bower_components/slick-carousel/slick/slick.min.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/util.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/alert.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/button.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/carousel.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/collapse.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/dropdown.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/modal.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/tab.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/tooltip.js', body: true
      },
      {
        src:'bower_components/bootstrap/js/dist/popover.js', body: true
      },
      {
        src:'js/demo_customizer.js?version=4.5.0', body: true
      },
      {
        src:'js/dataTables.bootstrap4.min.js', body: true
      },
      {
        src:'js/main.js', defer: true, body: true
      },

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/externalJS.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  router: {
    middleware: ['loadExternalJS', 'check-auth', 'auth', 'get-user',]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  axios: {
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-right',
    duration : 3000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
