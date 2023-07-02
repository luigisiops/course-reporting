import {Email} from './email'
describe('email of Student', () => {
    it('knows that emails over 35 characters is over the character limit', () => {
        const testEmail = 'abcdefghijklmnopqrstuvwxyz12345@gmail.com'
        expect(Email.create(testEmail)).toEqual({isSuccess: false, errors: [{type: 'Invalid character length', message: 'email length should be between 8 and 35 characters'}]})
    })
})