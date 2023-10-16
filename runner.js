const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNiZGJjZDUyLTliNTMtNGQ3ZS05ZDk2LWI4ZDc0OGU3N2FkNC0xNjk3NDY3NDYxMDU2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZjM1ZjNiOWEtMzg1Zi00Y2NkLTgwMTItMWQ2NDM3YWZjYWU2IiwidHlwZSI6InQifQ.xpriZPnhdUQKyxNgvfgA-Qlry2UE2suWJ6-tVdAmtpo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
