class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  toString() {
    return `${this.name} is taking ${this.course}`;
  }
}

export { Student }

// ES6 default
// export default Student;

// ES5 default
// module.exports = Student;

// ES6 named
// export { Student }

// ES5 named
// exports.Student = Student;