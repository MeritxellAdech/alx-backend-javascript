// Create an array of students with grades from a given location
/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city).map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
  });
}
