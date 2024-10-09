// Sum all the ids
/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, item) => sum + item.id, 0);
}
