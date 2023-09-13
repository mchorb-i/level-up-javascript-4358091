// Write your code here
function isPasswordStrong(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(password) ? 'Your password is valid' : 'Your password is invalid'
}

console.log(isPasswordStrong('tesR@1!s'));