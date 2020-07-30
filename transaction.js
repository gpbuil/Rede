const eRede = require('./lib/erede');
const Transaction = require('./lib/transaction');
const Store = require('./lib/store');
const Environment = require('./lib/environment');

let store = new Store('446263faa4ce4052a53a73d175752b0a', '10006448', Environment.sandbox());
let transaction = new Transaction(10, "abc5").creditCard(
    '2223020000000005',
    '123',
    '12',
    '2020',
    'Fulano de Tal'
);

new eRede(store).create(transaction);
new eRede(store).create(transaction).then(transaction => {
    if (transaction.returnCode === "00") {
       console.log(JSON.stringify(transaction));
    } 
})
;
