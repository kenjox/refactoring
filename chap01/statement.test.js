import { expect } from 'vitest';

import { statement, htmlStament } from './statement.js';
import { invoices, plays } from './data.js';

const expectedPlainText = `
Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $555.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,705.00
You earned 47 credits
`;

const expectedHtml = `
<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>55</td>
<td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td>
<td>$555.00</td></tr>
  <tr><td>Othello</td><td>40</td>
<td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,705.00</em></p>
<p>You earned <em>47</em> credits</p>
`;

describe('statement', () => {
  it('should render plain text statement', () => {
    const result = statement(invoices[0], plays);
    expect(result.trim()).toBe(expectedPlainText.trim());
  });

  it('should render html statement', () => {
    const result = htmlStament(invoices[0], plays);
    expect(result.trim()).toBe(expectedHtml.trim());
  });
});
