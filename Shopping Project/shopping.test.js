import { describe, test, expect, beforeEach, vi } from 'vitest';

import { scanForItem } from './shopping.js';

import { Window }  from 'happy-dom';
import fs from 'fs';
import path from 'path'

const htmlDocPath = path.join(process.cwd(), './Shopping Project/shopping.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

describe('scanForItem', () => {

    beforeEach(() => {

        document.body.innerHTML = ''
        document.write(htmlDocumentContent)

    })

    test ('should return 50 cents for 1 apple', () => {

        // Arrange
        const apples = 1;
        const expectedResult = 0.5;

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    })

    test ('should return 150 cents for 3 apples', () => {

        // Arrange
        const apples = 3;
        const expectedResult = 1.50;

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    })

    test ('should return 0 cents for 0 apples', () => {

            // Arrange
            const apples = 0;
            const expectedResult = 0

            // Act
            const results = scanForItem(apples);

            // Assert
            expect(results).toBe(expectedResult)

    })

    test ('should return -50 cents for -1 apple', () => {

        // Arrange
        const apples = -1;
        const expectedResult = -0.50;

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    })  

    test ('should work with string numbers', () => {

        // Arrange
        const apples = "1";
        const expectedResult = 0.5

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    })

    test ('should return 0 if input is a non number string', () => {

        // Arrange
        const apples = "HANDS UP";
        const expectedResult = 0;

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    })

    test ('should return 0 cents if input is NaN', () => {

        // Arrange
        const apples = NaN;
        const expectedResult = 0

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    })

    test ('should return 0 cents if input is undefined', () => {

        // Arrange
        const apples = undefined;
        const expectedResult = 0

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    })

    test ('should return infinity cents if input is infinity', () => {

        // Arrange
        const apples = Infinity;
        const expectedResult = Infinity

        // Act
        const results = scanForItem(apples);

        // Assert
        expect(results).toBe(expectedResult)

    }) 

})