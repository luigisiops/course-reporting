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
        return { success: true, errors:[] }
    }
}