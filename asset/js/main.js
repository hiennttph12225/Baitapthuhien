const regexCheckSpecialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

var validRegexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const nameErrors = document.querySelector("#nameErrors");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
let inValid = false;

const handleCheckSpecialCharacters = (charaters) => {
  return charaters.match(regexCheckSpecialCharacters);
};
const handleCheckEmail = (email) => {
  return validRegexEmail.test(email.toLowerCase());
};
const checkSignUpSuccces = () => {
  if (!inValid) {
    alert("Đăng kí thành công");
  }
};
const handleSubmit = () => {
  if (
    name.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    inValid = true;
    alert("Vui lòng nhập vào chố trống");
    return false;
  } else {
    inValid = false;
  }
  if (handleCheckSpecialCharacters(name.value)) {
    inValid = true;
    alert("Vui lòng không chứa kí tự đặc biệt");
    return false;
  } else {
    inValid = false;
  }
  if (!email.value.match(validRegexEmail)) {
    inValid = true;
    alert("Định dạng email không đúng ");
    return false;
  }
  if (password.value.length <= 8 && password.value.length <= 32) {
    inValid = true;
    alert("Mật khẩu từ 8- 32 kí tự");
    return false;
  } else {
    inValid = false;
  }
  if (confirmPassword.value !== password.value) {
    inValid = true;
    alert("Xác nhận mật khẩu không trùng khớp");
    return false;
  } else {
    inValid = false;
  }
  checkSignUpSuccces();
};
