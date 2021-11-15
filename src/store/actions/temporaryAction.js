export const saveTemporary = (name, value) => {
  return {
    type: "SAVE_TEMPORARY",
    fieldName: name,
    value: value,
  };
};
