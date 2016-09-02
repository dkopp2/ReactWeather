// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Harrisburg', function(err, temp) {
//
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Hanover').then(function (temp) {
//   console.log('success', temp);
// }
// , function (err) {
//   console.log('error', err);
// });

function addPromise(a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a !== 'number')
        reject('Parameter \'a\' must be an integer, doofus.');
    if (typeof b !== 'number')
        reject('Parameter \'b\' must be an integer, doofus.');

    var result = a+b;
    resolve(result);
  });
}

addPromise(2,3).then(function (result) {
  console.log('success', result);
}
, function (err) {
  console.log('error', err);
});

addPromise(2,'A').then(function (result) {
  console.log('success', result);
}
, function (err) {
  console.log('error', err);
});

addPromise('B','A').then(function (result) {
  console.log('success', result);
}
, function (err) {
  console.log('error', err);
});

addPromise('B',1).then(function (result) {
  console.log('success', result);
}
, function (err) {
  console.log('error', err);
});
