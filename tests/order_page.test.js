import countQuantity from "../assets/scripts/order_page.mjs";

import {strict as assert} from 'node:assert';
import {describe, it } from 'node:test';



test();

describe ('countQuantity() function', ()=> {
    it('countQuantity() displays results correctly', ()=> {

    assert.equal(countQuantity([
        {"id":1,
        "Quantity": 1},
        {"id":2,
            "Quantity": 3}
    ]), 4)
    })
})