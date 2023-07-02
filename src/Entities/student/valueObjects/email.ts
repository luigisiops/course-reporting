export class Email {
    private constructor() {

    }

    public static create(emailAddress: string) {
        if (emailAddress.length > 8 && emailAddress.length > 35) return {
            isSuccess: false, errors: 
            [{ type: 'Invalid character length', message: 'email length should be between 8 and 35 characters'}]
        }
        return new Email()
    }
}