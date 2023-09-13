// Write your code here
function urilify(blogTitle) {
  return blogTitle.toLowerCase().trim().replace(/([^a-z0-9 ])*/g, '').replaceAll(' ', '-');
}

console.log(urilify('My Blog name!'));
console.log(urilify('Emma\'s Blog!'));