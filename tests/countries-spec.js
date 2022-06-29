const expect = require('chai').expect
const CountriesHelper = require('../helpers/countries.helper')

describe('Get countries', function() {
    let countriesHelper = new CountriesHelper()

    before(async function () {
        await countriesHelper.get()
    })

    it('response status code is 200', function () {
        expect(countriesHelper.response.status).to.eq(200)
    })

    it('response body is an array of strings with length of 2', function () {
        for (let entry of countriesHelper.response.body) {
            expect(entry).to.be.a('string')
            expect(entry.length).to.eq(2)
        }
    })
})