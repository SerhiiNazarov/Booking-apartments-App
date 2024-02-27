<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Логин</MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
      <CustomInput
        class="login__input"
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        :rules="emailRules"
        name="email"
      />
      <CustomInput
        class="login__input"
        v-model="formData.password"
        placeholder="Password"
        type="password"
        name="password"
        autocomplete="current-password"
        :rules="passwordRules"
      />
      <BtnComponent class="login__btn" type="submit" :loading="loading"
        >Вход</BtnComponent
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../../shared/form/index.vue";
import CustomInput from "../../shared/CustomInput.vue";
import BtnComponent from "../../shared/BtnComponent.vue";
import AuthContainer from "../AuthContainer.vue";
import MainTitle from "../../shared/MainTitle.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import { mapActions } from "vuex";

export default {
  name: "AppLogin",
  components: {
    Form,
    CustomInput,
    BtnComponent,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      if (isFormValid) {
        try {
          this.loading = true;
          await this.login(this.formData);
          this.$router.push({ name: "homepage" });
          form.reset();
        } catch (error) {
          this.$notify({
            type: "error",
            title: "Произошла ошибка",
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .login {
  &__form {
    display: flex;
    flex-direction: column;
  }

  &__input {
    margin-bottom: 20px;
  }

  &__title {
    text-align: center;
  }

  &__btn {
    width: 100%;
  }
}
</style>
