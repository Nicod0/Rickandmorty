const validation = (userData, errors, setErrors) => {
  if (!userData.username)
    setErrors({ ...errors, username: "please complete this input" });
  else if (userData.username.length > 35) {
    setErrors({ ...errors, username: "the username is too long" });
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "invalid email" });
  } else {
    setErrors({ ...errors, username: "" });
  }

  if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(userData.password)) {
    setErrors({
      ...errors,
      password:
        "the password has to have more than six characters and less than ten",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
};
export default validation;
