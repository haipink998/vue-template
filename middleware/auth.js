const pagePublic = ["/login", "/register"];

export default function ({ store, redirect, route }) {
  if (!store.getters['auth/isAuthenticated']) {
    if (!pagePublic.includes(route.path)) {
      return redirect('/login');
    }
  }
  //! If logged
  else {
    if (pagePublic.includes(route.path)) {
      return redirect('/')
    }
  }
}