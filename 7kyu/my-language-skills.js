// DESCRIPTION:
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
//Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []



//SOLUTIONS:

function myLanguages(results) {
    return Object.entries(results).sort((a, b) => b[1] - a[1]).map((el) => el[1] >= 60 ? el[0] : 0).filter(Boolean)
}


function myLanguages(results) {
    return Object.entries(results).filter((el) => el[1] >= 60).sort((a, b) => b[1] - a[1]).map((i) => i[0])
}