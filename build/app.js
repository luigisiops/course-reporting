"use strict";
//Information Holders
var student1 = Student.create({ name: 'John', lastName: 'Smith', email: 'John1@gmail.com' });
var student2 = Student.create({ name: 'Luigi', lastName: 'Siopongco', email: 'luigi@gmail.com' });
var student3 = Student.create({ name: 'Fake', lastName: 'Student', email: 'fakeStudent@gmail.com' });
var mathCourse = Course.create('Math');
var Teacher = Teacher.create({ name: 'Jane', lastName: 'Doe', email: 'JaneDoe@gmail.com', course: 'Math' });
//Information holder
var assignment1 = Assignment.create({ name: 'first_assignment' });
var assignment2 = Assignment.create({ name: 'second_assignment' });
var test = Test.create({ name: 'first_test' });
var final = Test.create({ name: 'final' });
//assignment and submission may be controllers 
mathCourse.assignAssignment(assignment1);
mathCourse.submitAssignment({ assingment: assignment1, student: student });
var calculateAverageGrades = AverageGrade
    .addAssignments([assignment1, assignment2])
    .addTest(test)
    .addFinal(final)
    .getGrade();
//Programming by wishful thinking --- Application layer concerns
/*
let app = new CourseApplication()
app.createStudent()
app.addStudents([student1, student2])

app.createTeacher
app.assignTeacher(teacher)

app.addAssignments([Assignment1, assignment2])
app.addTest(test)
app.addFinal(final)

app.getGrade(studentId)
app.submitAssignment(Assessment)
app.sendAssessmentNotification()

app.calculateStudentAverage()

*/
