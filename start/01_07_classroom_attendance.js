// Write your code here
function getStudents (classroom) {
  const {hasTeachingAssistant, classList} = classroom;
  let teacher, teacherAssistant, students;
  if (hasTeachingAssistant) {
    [teacher, teacherAssistant, ...students] = classList;   
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

const classroom = {
  hasTeachingAssistant: false,
  classList: ["Rachida", "John", "Roman", "Lisa", "Omar", "Lukas"]
};
console.log(getStudents(classroom));
