export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Пожалуйста заполните это поле",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Вы превысели лимит",
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "Неверный имейл",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(val),
  message: "Пароль должен содержать одну цифру и один символ",
});
