// promise : is object represents the eventual completion of an asynac operation and results its value

// most important point that is
// promise is the imuutable object that means not change the object data

// https://restcountries.com/v3.1/all
// lets call the above url using fetch web api given by the brover

// const apiCall = fetch("https://restcountries.com/v3.1/all");

// console.log(apiCall);

// when promise resolved and to use , access with response after fulfilled  than use
/*
apiCall.then((data) =>
  data.json().then((d) => {
    // here some example with fetch api
    console.log(d[0], typeof d);

    const div1 = document.getElementById("div1");

    let str = "";

    d.forEach((element) => {
      // console.log(element);
      str += element.capital + "<br/>";
    });
    div1.innerHTML = str;
  })
);
*/
// console.log(apiCall);

//output
// Promise {<pending>}
// Promise {<pending>}
// Response {type: 'cors', url: 'https://restcountries.com/v3.1/all', redirected: false, status: 200, ok: true, …}

//you can see here that when resolve the promise than mictotask queue the callback to an executaion context
// in the call stack after that its called and its give the response

//lets take real life promise example and make own promise and its all functionality

//here example with that is the ecommerance website when you take order how to order gets

/*
    1 add card
    2 createOrder
    3 validateCard
    4 if createOrder give orderId than its take to proceedto payment 
    5 else its reject to as error
*/

//lets take the challenge using promise

let cards = [1, 2];

const addCard = (card) => {
  cards.push(card);
};

//when create order call its return promise
const promise = createOrder(cards);
// console.log(promise);

//promise chain
//when you return once then heance its also return it promise
//and when you return promise to promise than promise chain is than very easy option to overcome callback hell
//here first promise reslove and its return
promise
  .then((orderId) => {
    // console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    //this logic here its say when you not return than return undefinded  after specific time its return the orderid
    // after two second
    setTimeout(() => {
      console.log(orderId);
      return orderId;
    }, 2000);
  })
  .then((orderId) => {
    // return orderId;
    setTimeout(() => {
      return orderId;
    }, 2000);
  })
  .then((orderId) => {
    //the chain arrived to here after five second and its get the undefined
    console.log(orderId);
    return orderId;
  })
  .catch((err) => {
    console.log(err.message);
  });

// console.log(promise);

//this is the also promise same as above but its totally independent to above
//therefore this resolve to alone and its resolve after five second
promise.then((orderId) => {
  console.log(orderId);
});

//create order api return the promise
function createOrder(card) {
  //this is the promise object and argument is the function its contain the two resolve and reject callback
  const pr = new Promise(function (resolve, reject) {
    if (!validateCard(card)) {
      const err = new Error("card not validate");

      //when any erro you defined and its handled than you can use reject 
      reject(err);
    }

    const orderId = "3434";
    if (orderId) {
      setTimeout(function () {
        //
        //when your goal or things completed than to return successed by putting the resolve 
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCard(card) {
  return true;
}
