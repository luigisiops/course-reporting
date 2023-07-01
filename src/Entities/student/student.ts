interface IStudentProps {
    firstName: string,
    lastName: string,
    email: string,
}

export class Student{
    private constructor(){

    }
    public static create(studentProps: IStudentProps) {
        return {isSuccess:true, errors: []}
    }
}