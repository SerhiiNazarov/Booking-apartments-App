<template>
  <header class="header">
    <AppContainer>
      <div class="header__content">
        <router-link to="/">
          <AppLogo />
        </router-link>
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </AppContainer>
  </header>
</template>

<script>
import AppContainer from "../shared/AppContainer.vue";
import AppLogo from "../AppLogo.vue";
import AuthActions from "./AuthActions.vue";
import AccountActions from "./AccountActions.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  components: {
    AppContainer,
    AppLogo,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
