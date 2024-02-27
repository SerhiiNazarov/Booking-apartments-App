<template>
  <div class="wrapper-input">
    <input
      v-model="inputValue"
      :value="inputValue"
      @blur="blurHandler"
      class="custom-input"
      v-bind="$attrs"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      inputValue: "",
      isValid: true,
      error: "",
      isFirstInput: true,
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  inheritAttrs: false,
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {
    if (!this.form) return;

    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) return;

    this.form.unRegisterInput(this);
  },
  watch: {
    inputValue() {
      if (this.isFirstInput) return;

      this.validate();
    },
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.inputValue);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });

      return this.isValid;
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }

      this.isFirstInput = false;
    },
    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.inputValue = "";
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.wrapper-input {
  position: relative;
  display: flex;
  flex-direction: column;
}

.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
