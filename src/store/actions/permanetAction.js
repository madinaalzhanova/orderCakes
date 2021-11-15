export const savePermanentItem = (name, value) => {
  return {
    type: 'CHANGE_PERMANENT',
    fieldName: name,
    value: value,
  };
};
export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
export const alreadyLaunched = () => {
  return {
    type: 'ALREADY_LAUNCHED',
  };
};

export const profileSaved = (data) => {
  return {
    type: 'PROFILE_SAVED',
    token: data.token,
    user: data.user,
  };
};