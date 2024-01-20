import { expect } from 'vitest';

import { statement } from './statement.js';
import { invoices, plays } from './data.js';

const expectedOutput = `
Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $555.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,705.00
You earned 47 credits
`;

describe('statement', () => {
  it('should print a statement', () => {
    const result = statement(invoices[0], plays);
    expect(result.trim()).toBe(expectedOutput.trim());
  });
});
