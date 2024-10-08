// Retrieve an array of id from an array of objects using map
/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.map(({ id }) => id);
}
