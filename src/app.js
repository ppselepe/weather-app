const path = require('path');
const express = require('express');

const app = express();


console.log("ohh nana whats my name");
app.get('', (req, res) => {
  res.send({
    name: 'phuti',
    surnmae: 'selepe'
  });

});


app.get('/accounts', (req, res) => {

  res.send(
    [{

      AvailableBalance: ".3",
      TransDate: "2019-08-07",
      AcctNo: "10009374127",
      TransDesc: "B/F ..."
    }, {
      AvailableBalance: "50.3",
      CreditAmount: "50",
      DebitAmount: "0",
      TransDate: "2019-08-08",
      AcctNo: "10009374127",
      TransDesc: "BRDGE"
    }, {

      CreditAmount: "0",
      DebitAmount: "1",
      TransDate: "2019-10-30",
      AcctNo: "10009374127",
      TransDesc: "Miscellaneous Customer Debit"

    }]


  )

})


app.listen(3000, () => {

  console.log('running on 3000');

})






