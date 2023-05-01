const analyzeArray = require('./analyzeArray')


const datasetOne = [1, 8, 3, 4, 2, 6]
const datasetOneResult = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
};


test('Tests with dataset 1', () => {
    expect(analyzeArray(datasetOne)).toEqual(datasetOneResult)
})