console.log('Asyronized ajex programming primary ')

/*

    What's AJAX?

    AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to 
    communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and
    text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate 
    with the server, exchange data, and update the page without having to refresh the page.

    The two major features of AJAX allow you to do the following:

    1. requests to the server without reloading the page
    2. Receive and work with data from the server

*/

let btn = document.getElementById('json')
btn.addEventListener('click', request)

function request () {
  // XMLHttpsRequest object 
  let xhr = new XMLHttpRequest()

  // if instance not define than apply
  if (!xhr) {
    console.log('Not Accept the request')
}

    /*
  
        Next, after declaring what happens when you receive the response, you need to actually make the request, by  calling the open() and 
        send() methods of the HTTP request object, like this:

        The first parameter of the call to open() is the HTTP request method – GET, POST, HEAD, or another method supported by your server. 
        Keep the method all-capitals as per the HTTP standard, otherwise some browsers (like Firefox) might not process the request. For more
        information on the possible HTTP request methods,

        The second parameter is the URL you're sending the request to. As a security feature, you cannot call URLs on 3rd-party domains by 
        default. Be sure to use the exact domain name on all of your pages or you will get a "permission denied" error when you call open(). 
        A common pitfall is accessing your site by domain.tld, but attempting to call pages with www.domain.tld. If you really need to send a 
        request to another domain, see HTTP access control (CORS).

        The optional third parameter sets whether the request is asynchronous. If true (the default), JavaScript execution will continue and
        the user can interact with the page while the server response has yet to arrive. This is the first A in AJAX.
    
    */

  xhr.open('GET', 'firstJSONFile.json', true)
  let processNO = 1
  /*
      When you sent the request, you provided the name of a JavaScript function to handle the response:

      What should this function do? First, the function needs to check the request's state. If the state has the value of 
      XMLHttpRequest.DONE (corresponding to 4), that means that the full server response was received and it's OK for you to 
      continue processing it.

      The full list of the readyState values is documented at XMLHTTPRequest.readyState and is as follows:

          0 (uninitialized) or (request not initialized)
          1 (loading) or (server connection established)
          2 (loaded) or (request received)
          3 (interactive) or (processing request)
          4 (complete) or (request finished and response is ready)

  */
  xhr.onreadystatechange = function () {
    console.log('The Procees Of The Program process NO : ' + xhr.readyState)
  }

  processNO++

  /*

      After checking the state of the request and the HTTP status code of the response, you can do whatever you want with the data the server sent. You have two options to access that data:

      httpRequest.responseText – returns the server response as a string of text

      httpRequest.responseXML – returns the response as an XMLDocument object you can traverse with JavaScript DOM functions

      Note that the steps above are valid only if you used an asynchronous request (the third parameter of open() was unspecified or set to true). If you used a synchronous request you don't need to specify a function, but this is highly discouraged as it makes for an awful user experience.

      */

  var str = ''
  xhr.onload = function () {
    if (xhr.status === 200) {
      str = xhr.responseText
      console.log(str)
    }else {
      alert(xhr.status + ' ' + xhr.statusText)
    }

    obj = JSON.parse(str)
    console.log(JSON.parse(str))
    let divPara = document.createElement('ul')
    divPara.id = 'divPara'
    let btn = document.getElementById('json')
    let bod = document.querySelector('body')
    bod.appendChild(divPara)
    btn.before(divPara)
    // obj.array.forEach(element => {
    //   divPara.innerHTML = `<li> ${element["Name"]} </li>`
    // })

    var stri = "" ;
    for (const key in obj) {
      
        const element = obj[key];

        if (typeof(element) === Object) {
            for (const val in element) {
              
                const valueOfElement = element[val];
                stri += `    <li> ${valueOfElement} </li>`;
              
            }
        }
        stri += `<li> ${element} </li>`;
      
    }
    divPara.innerHTML = str ;
  }

  // if your request has been complected by (code) than send the request of the s  end method
  xhr.send()
}

// the example of MDN refrance code 
function makeRequest () {
  httpRequest = new XMLHttpRequest()

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance')
    return false
  }
  httpRequest.onreadystatechange = alertContents
  httpRequest.open('GET', 'firstJSONFile.json')
  httpRequest.send()
}

function alertContents () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      alert(httpRequest.responseText)
    } else {
      alert('There was a problem with the request.')
    }
  }
}
