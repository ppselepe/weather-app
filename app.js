const path = require('path');
const express = require('express');

const app = express();

const direcotry = path.join(__dirname, '/public');

app.use(express.static(direcotry));


console.log('PATH', path.join(__dirname, '/public'));
console.log('dir', __dirname);
app.get('/name', (req, res) => {
  res.send({
    name: 'phuti',
    surnmae: 'selepe'
  });

});

app.get('/weather', (req, res) => {

  if (!req.query.address) {
    return res.send({ error: 'no address was found' });

  }

  res.send({
    forcast: '55D',
    location: req.query.address

  })


})


app.get('/accounts', (req, res) => {

  console.log(req.query.AcctNo);


  // if (!req.query.AcctNo) {
  //   return res.send({
  //     error: "Account number does not exist"
  //   })

  // }

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






