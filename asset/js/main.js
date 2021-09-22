const regexCheckSpecialCharacters =
  /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

const regexCheckEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const name = document.querySelector("#nameInput");
const email = document.querySelector("#email");
const nameErrors = document.querySelector("#nameErrors");
const password = document.querySelector("#exampleInputPassword");
const rePassword = document.querySelector("#exampleInputRePassword");
let succesStatus = false

const handleCheckSpecialCharacters = (charaters) => {
  return charaters.match(regex_check_special_characters);
};
const handleCheckEmail = (email) => {
  return regex_check_email.test(String(email).toLowerCase());
};
const checkSignUpSucces = () =>{
    if(!succesStatus){
        alert('Đăng kí thành công')
    }
}
const handleSubmit = () => {
  if (
    name.value == "" ||
    email.value == "" ||
    password.value == "" ||
    rePassword.value == ""
  ) {
    succesStatus = true
    alert("Vui lòng nhập vào chố trống");
    return false;
  }
  else{
    succesStatus = false
  }
  if (handleCheckSpecialCharacters(name.value)) {
    succesStatus = true
    alert("Vui lòng không chứa kí tự đặc biệt");
    return false;
  }
  else{
    succesStatus = false
  }
  if (!email.value.match(validRegexEmail)) {
    succesStatus = true
    alert("Định dạng email không đúng ");
    return false;
  }
  if (password.value.length <= 8 && password.value.length <= 32) {
    succesStatus = true
    alert("Mật khẩu từ 8- 32 kí tự");
    return false;
  }
  else{
    succesStatus = false
  }
  if (rePassword.value !== password.value) {
    succesStatus = true
    alert("Xác nhận mật khẩu không trùng khớp");
    return false;
  }
  else{
    succesStatus = false
  }
  checkSignUpSucces()
};
