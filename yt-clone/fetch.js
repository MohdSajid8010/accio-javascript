/**
 * FE => HTML, CSS, Client Javascript
 * BE => 
 */

// const usersList = [
//     {
//         name: '',
//         id: '',
//         followers: '',  
//         posts: ,
//         following: ,
//     },
//     {
//         name: '',
//         id: '',
//         followers: '',  
//         posts: ,
//         following: ,
//     },
//     {
//         name: '',
//         id: '',
//         followers: '',  
//         posts: ,
//         following: ,
//     }
// ]

// Database server
// 1000's TB 

// BE server(Instagram)
// function fetchUsers(str){ filters the users ; return result; }
// REST => representational state transfer

// ara => user1

// abc => user2

// API => piece of code which does some meaningful work

// How frontend actually makes a call to a REST api 


// https://google.com/api/search


// https://securedapi.confirmtkt.com/api/platform/getAutoSuggestedStationList?searchString=&language=EN&limit=15


// const url = "https://securedapi.confirmtkt.com/api/platform/getAutoSuggestedStationList?searchString=&language=EN&limit=15";


// fetch API

/**
 * {searchString: '', language: 'EN' , limit: 15}
 *  */

// JSON => javascript object notation


// let user = {name: 'aravind',age: 22,college: 'abc',state: 'telangana'}
// const stringifiedObject = JSON.stringify(user)
// console.log(stringifiedObject, typeof stringifiedObject)
// const originalObject = JSON.parse(stringifiedObject);
// console.log(originalObject, typeof originalObject)

// object
// XML
// <user>
//     <name>aravind</name>
//     <college>abc</college>
//     <state>telangana</state>
//     <age>22</age>
// </user>

// stringify

const form = document.getElementById("form");
const resultsContainer = document.getElementById("results")
const input = document.getElementById("search");

function renderCitiesOntoDom(citiesList){
    resultsContainer.innerHTML = '';
    citiesList.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `City:  ${item.city}  , State: ${item.state}`;
        resultsContainer.appendChild(li);
    })
}

async function fetchCities(str){
    const url = `https://securedapi.confirmtkt.com/api/platform/getAutoSuggestedStationList?searchString=${str}&language=EN&limit=100`;

    const response = await fetch(url);
    const data = await response.json();

    if(data.Status === "success"){
        renderCitiesOntoDom(data.StationList)
    }   
    else {
        alert("Something went wrong")
    }
}

input.addEventListener("keyup", (e) => {
    e.preventDefault();

    const searchString = e.target.value ;

    fetchCities(searchString);

    // promise.then((data) => {
    //     const response = data.json();
    //     response.then((finalData) => {
    //         console.log(finalData)
    //     })

    //     response.catch((err) => {
    //         console.log("Error occurred" , {err})
    //     })
    // })

    // promise.catch((err) => {
    //     console.log("Something went wrong", {err}) // {err: }
    // })
})

/**
    {
        id: unique_id,
        video_url: '',
        details : {
            title: 'Some title',
            description: '',
            keywords: [
                "",
                "",
                ""
            ],
            thumbnail: 'image_url",
        },
        metrics: {
            likes: 100,
            views: 1200,
            comments_count: 120,
            commentsList : [
                {
                    likes: 10,
                    data: 'Some comment text",
                    user: ""
                }
            ]
        }
    }


 */


    /**
     * 
     * Creating API_KEY from google console
     * 1. Create a project on the top dropdown
     * 2. search for 'Youtube DATA api v3' on right side of project dropdown.
     * 3. click on the Youtube data api v3 result.
     * 4. click on enable (parllelly open the documentation)
     * 5. After enabling go to credentials tab and create credentials => API key
     */