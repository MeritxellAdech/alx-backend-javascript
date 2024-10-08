// Implementing getters and setters and type check
/* eslint-disable no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (typeof students === 'object') {
      this._students = students;
    }
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (typeof students === 'object') {
      this._students = students;
    }
  }

  get students() {
    return this._students;
  }
}
