import { it, expect } from 'vitest'

import { upperCaseFirst } from './upperCase.js'

it (`should capitalize first letter in a string`, () => {

    // Arrange
    const testString = "hi!"
    const expected = "Hi!"
    // Act
    const results = upperCaseFirst(testString)
    // Assert
    expect(results).toBe(expected)

})

it (`should return an empty string if argument is an empty string`, () => {
    // Arrange
    const testString = ""
    const expected = ""
    // Act
    const results = upperCaseFirst(testString)
    // Assert
    expect(results).toBe(expected)

})