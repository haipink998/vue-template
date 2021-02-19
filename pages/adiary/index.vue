<template>
  <Adiary />
</template>

<script>
import { excuteAllExternalScript } from "../../helpers/index";
import Adiary from "../../components/Adiary";
import mutationTypes from '~/constants/mutationTypes';
import { mapGetters} from 'vuex';
export default {
  components: {
    Adiary
  },
  head() {
    return {
      bodyAttrs: {
        class:
          "menu-position-side menu-side-left full-screen with-content-panel"
      },
      // script: [excuteAllExternalScript()]
    };
  },

  computed: {
    idOfSon: function() {
      return this.$store.getters[`user/getIdOfSon`]
    }
  },

  watch: {
    idOfSon: function(value) {
      if (value) {
        this.$store.dispatch(`diary/${mutationTypes.USER.GET_DIARY_SON}`, { id: this.idOfSon });
      }
    }
  },

  mounted() {
    this.$store.dispatch(`diary/${mutationTypes.USER.GET_DIARY}`);

  },

};
</script>

<style></style>
