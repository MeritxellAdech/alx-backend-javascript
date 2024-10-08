// Filter a list of students based on their location
/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((item) => item.location === city);
}
