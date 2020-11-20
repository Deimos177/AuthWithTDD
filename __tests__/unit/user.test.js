const { User } = require('../../src/app/models')

const bcrypt = require('bcryptjs')

const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })
    
    it('should encrypt user password', async ()=>{
        const user = await User.create({ 
            name: 'Bruce', 
            email: 'brucevieira.2009@gmail.com', 
            password: '123123' })

        const compareHash = await bcrypt.compare('123123', user.password_hash)

        expect(compareHash).toBe(true)
    })
})