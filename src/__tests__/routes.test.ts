
import app from '../server'
import supertest from 'supertest'

describe('GET /', () => {
    it('should sen back some data', async () => {
        const res = await supertest(app)
            .get('/')

        expect(res.body.message).toBe('hello')
    })
})