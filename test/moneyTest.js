import { formatCurrency } from '../scripts/utils/money.js';


if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

formatCurrency(2000.5) === '20.01' ? console.log('passed') :console.log('failed')