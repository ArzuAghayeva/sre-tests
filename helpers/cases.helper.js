const supertest = require('supertest');

class CasesHelper {
    response

    async get(code) {
        this.response = await supertest(process.env.BASE_URL)
            .get(`/country/${code}`)
            .send()
        return this.response
    }
}

module.exports = CasesHelper