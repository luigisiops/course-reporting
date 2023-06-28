import {CreateStudent} from './createStudent';

describe('Create Student', () => {
    it('knows that given proper information, to create a student', () => {
        const data = {firstName: 'Luigi', lastName: 'Siopongco', email: 'luigi@mail.com'}
        const createStudentUseCase = CreateStudent.create()
        expect(createStudentUseCase.execute(data)).toEqual({success:true, errors:[]})
    })
})