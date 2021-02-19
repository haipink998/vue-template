<template>
  <div class="menu-w color-scheme-light color-style-transparent menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link">
    <Logo />
    <LoggedUser />

    <MainMenu />
  </div>
</template>

<script>
import Logo from "./Logo";
import LoggedUser from "./LoggedUser";
import MainMenu from "./MainMenu";
import MobileMenu from "./Mobile-Menu";
export default {
  components: {
    Logo,
    LoggedUser,
    MainMenu,
    MobileMenu
  },

}
</script>

<style>

</style>