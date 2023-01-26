// fetch api is updated version of HTTPSREQUEST but fetch api very fexiliaable and simple 
// fetch api mandoary arugument is path/url to fetch content 
// its return as promise 


/*
function getStudent(){

    url = `..\\firstJSONFile.json` ;
    fetch(url,{method:'GET'}).then((response) => {
        return response.json();
    }).then((data) => console.log(data));

}

getStudent();

*/

// its post request status here make object and its fetch as parameter 
// but main kind few api(dummy api to allow to edit data from their url) than its not work very well 
 
async function geturl(){

    let url = `https://employeedetails.free.beeceptor.com/my/api/path` ;
    let data = `{"name":"asjdsahk","salary":"123","age":"23"}`;

    let params = {
        method : 'post',
        headers : {'Content-Type':'application/json'},
        body : data 

    }

    // await fetch(url,params).then((response) => {
    //     console.log(response.json())
    // }).then((data) => console.log(data));

    let response = await fetch(url);

    let data1 = await response.json()

    console.log(data1)

}



const url = 'https://restcountries.com/v3.1/all'

 async function fetchRestCountries(url) {
    

    fetch(url).then(response => response.json()).then((data) => {

        // console.log(data[0].name)

        data.forEach(element => {

            // if (element.name.common === 'India') {
            //     let flag = document.getElementById('flag')
            //     console.log(element)
            //     flag.setAttribute('src',element.flags.png)
            //     // console.log(element.common.flags);
            // }
            
            let img = document.createElement('img')
            img.setAttribute('src',element.flags.png);
            let div = document.createElement('div')
            div.innerText = element.name.common ;

            let body = document.querySelector('body')
            body.append(div,img)

        });
    })

//    console.log(res.json())
    // console.log(response.json())
}


setTimeout(() => {
    fetchRestCountries(url)
    
}, 200);
