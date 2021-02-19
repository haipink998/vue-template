<template>
  <ul class="breadcrumb">
    <li class="breadcrumb-item">
      <nuxt-link to="/">
        Home
      </nuxt-link>
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      class="breadcrumb-item"
    >
      <nuxt-link :to="crumb.path"
        >{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
        }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, " "),
            ...match
          });
        }
      });
      return crumbs;
    }
  }
};
</script>

<style></style>
