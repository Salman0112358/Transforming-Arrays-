
// function name: lowercaseDomain
// parameters:
//  - emailList: array of strings
// returns: array of strings


/**
 * 
 * @param {string[]} emailList 
 * @returns {string[]} 
 */
function lowerCaseDomain(emailList){

    const lowerCaseList = []

    for (let email of emailList){
        email.toLowerCase()
        lowerCaseList.push(email.toLowerCase())
    }

    return lowerCaseList

}

// test cases

console.log(
	lowerCaseDomain(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
)

console.log(
	lowerCaseDomain(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"]
)

/*function body pseud code

let lowerCaseList = []

for each email in the input array, execute the following {
    email to lower case
    lowerCaseList.push() email
}

return lowerCaseList

*/