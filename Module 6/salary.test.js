import { describe, it, expect, vi, beforeEach, test } from 'vitest'

import { Window } from 'happy-dom';
 
import { paySalary } from './salary.js'

import path from 'path';
import fs from 'fs'

const htmlDocPath = path.join(process.cwd(), './Module 6/salary.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

let name = document.getElementById('name')
let hours = document.getElementById('hours')
let pay = document.getElementById('pay')

function truncatePayString(pay){
    return Number(pay.slice(20))
}

describe('paySalary', () => {

    beforeEach(() => {

        document.body.innerHTML = ''
        document.write(htmlDocumentContent)

        name = document.getElementById('name');
        hours = document.getElementById('hours');
        pay = document.getElementById('pay');
    
    })

    it('should show changes to hours', () => {

        const expectedResult = 400;
        const testHours = 40;

        hours.value = testHours;

        expect(Number(hours.value)).toBe(testHours)

    })

    it('should be 400$ for 40 hours', () => {

        const expectedResult = 400;
        const testHours = 40;

        hours.value = testHours;

        paySalary();

        const results = truncatePayString(pay.innerHTML);

        expect(results).toBe(expectedResult)

    })

    it('should be 490$ for 46 hours', () => {

        const expectedResult = 490;
        const testHours = 46;

        hours.value = testHours;

        paySalary();

        const results = truncatePayString(pay.innerHTML);

        expect(results).toBe(expectedResult)

    })

    it('should be 0$ for 0 hours', () => {

        const expectedResult = 0;
        const testHours = 0;

        hours.value = testHours;

        paySalary();

        const results = truncatePayString(pay.innerHTML);

        expect(results).toBe(expectedResult)

    })

    it('should be 0$ with empty input', () => {

        const expectedResult = 0;
        const testHours = "";

        hours.value = testHours;

        paySalary();

        const results = truncatePayString(pay.innerHTML);

        expect(results).toBe(expectedResult)

    })

    it('should be undefined if the input is a non number', () => {

        const testHours = "test";

        hours.value = testHours;

        const results = () => {paySalary()};

        expect(results()).toBe(undefined)

    } )

    it('should be undefined if the input is Infinity', () => {

        const testHours = Infinity;

        hours.value = testHours;

        const results = () => {paySalary()};

        expect(results()).toBe(undefined)

    } )

})