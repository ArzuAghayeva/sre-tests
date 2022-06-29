const CountriesHelper = require('../helpers/countries.helper')
const CasesHelper = require('../helpers/cases.helper')
const { getRandomValue } = require('../helpers/common.helper')
const { expect } = require('chai')

describe('Cases', async function () {
    describe('Valid country code', function () {
        let countriesHelper = new CountriesHelper()
        let casesHelper = new CasesHelper()
        let code

        before(async function () {
            await countriesHelper.get()
            code = await getRandomValue(countriesHelper.response.body)
            await casesHelper.get(code)
        })

        it('response status code is 200', function () {
            expect(casesHelper.response.status).to.eq(200)
        })

        it('response body contains country code from request', function () {
            expect(casesHelper.response.body[0]['Country_code']).to.eq(code)
        })
    })
})