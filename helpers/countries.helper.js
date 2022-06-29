const supertest = require('supertest');

class CountriesHelper {
    response

    async get() {
         this.response = await supertest(process.env.BASE_URL)
            .get('/country_codes')
            .send()
        return this.response
    }
}

module.exports = CountriesHelper