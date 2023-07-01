import {CreateStudent} from './createStudent';

describe('Create Student', () => {
    it('knows that given proper information, to create a student', () => {
        const data = {firstName: 'Luigi', lastName: 'Siopongco', email: 'luigi@mail.com'}
        const createStudentUseCase = CreateStudent.create()
        expect(createStudentUseCase.execute(data)).toEqual({isSuccess:true, errors:[]})
    })

    it ('knows that given an improper email format such as luigi.$, to throw an error', () => {
        const data = { firstName: 'Luigi', lastName: 'Siopongco', email: 'luigi.$' }
        const createStudentUseCase = CreateStudent.create()
        expect(createStudentUseCase.execute(data)).toEqual({isSuccess: false, errors:[{type: 'Invalid Email', message: 'Invalid Email Format'}]})
    })
})