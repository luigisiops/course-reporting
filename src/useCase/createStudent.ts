import {Student} from '../Entities/student/student'
interface studentData {
    firstName: string;
    lastName: string;
    email: string;
}

export class CreateStudent {
    
    private constructor() {}

    public static create() {
        return new CreateStudent()
    }
    public execute(studentData: studentData) {
        const studentOrError = Student.create(studentData)
        if (!studentOrError.isSuccess) return {isSuccess: false, errors: studentOrError.errors}


        return { isSuccess: true, errors: []}
    }
}