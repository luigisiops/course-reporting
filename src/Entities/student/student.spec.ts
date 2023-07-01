import {Student} from './student';

describe('creating a student', () => {
    it('knows that given valid data, a student will be successfully created', () => {
        const studentProps = {firstName: 'Luigi', lastName: 'Siopongco', email: 'luigisiops@gmail.com'}
        expect(Student.create(studentProps)).toEqual({isSuccess: true, errors: []})
    })
})