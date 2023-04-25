// AIzaSyA5SRKyu5w7Y9q7VXeClI9IxhD9m3nP7ao


const apiKey = "AIzaSyA5SRKyu5w7Y9q7VXeClI9IxhD9m3nP7ao" ;
/*
Loading the details of a single video: 


const id = "I18qgLc5_x4";
const part = "statistics,snippet";
const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${id}&part=${part}` ;


    // {
    //     key: 'API_KEY',
    //     id: 'VIDEO_ID',
    //     part: 'STATISTICS"
    // }

(async function(){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)
})();

*/


/*
part = statistics
Response: 

{
  "kind": "youtube#videoListResponse",
  "etag": "UoYDCOrYs005y5NdV8wEr7spaac",
  "items": [
    {
      "kind": "youtube#video",
      "etag": "JSdoUJs81GdYUXZ5j9CZvAau7GQ",
      "id": "I18qgLc5_x4",
      "statistics": {
        "viewCount": "5743",
        "likeCount": "2409",
        "favoriteCount": "0",
        "commentCount": "490"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 1
  }
}

part = statistics, snippet

Response: 

{
    "kind": "youtube#videoListResponse",
    "etag": "P4DyPEk_7zk7R5jr1nUVh5i80q4",
    "items": [
        {
            "kind": "youtube#video",
            "etag": "RnMq75vhcHl2KuP6ZlavM9ku3vk",
            "id": "I18qgLc5_x4",
            "snippet": {
                "publishedAt": "2023-04-25T13:30:10Z",
                "channelId": "UCr8Tl18qM93nNMDh4CLVqKA",
                "title": "RGV sensational interview with Nagarjuna Yadav on Viveka case | #RGVNIJAM | NIZAM Channel",
                "description": "Ram Gopal Varma conducted an interview with Nagarjuna Yadav in an attempt to solve the Vivekananda Reddy murder case in Nizam Channel.\nIn this Interview, we delve into the intriguing Viveka murder case, which has taken a new twist every day, and has now entered the political arena. We explore the court orders and proceedings, and the expectations surrounding the Central Bureau of Investigation's (CBI) involvement.\nRGV begin by taking a closer look at the original Viveka murder case, including the key characters involved and the events leading up to the crime. RGV also examine the their possible connections to the case.\nThroughout the Interview, RGV will keep you updated on the latest developments in this ongoing case. So, if you're interested make sure to tune in and join us as we explore the Viveka murder case.\n\n#RGV #RGVnijam #vivekacase",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/I18qgLc5_x4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/I18qgLc5_x4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/I18qgLc5_x4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/I18qgLc5_x4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/I18qgLc5_x4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "RGV",
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "RGV sensational interview with Nagarjuna Yadav on Viveka case | #RGVNIJAM | NIZAM Channel",
                    "description": "Ram Gopal Varma conducted an interview with Nagarjuna Yadav in an attempt to solve the Vivekananda Reddy murder case in Nizam Channel.\nIn this Interview, we delve into the intriguing Viveka murder case, which has taken a new twist every day, and has now entered the political arena. We explore the court orders and proceedings, and the expectations surrounding the Central Bureau of Investigation's (CBI) involvement.\nRGV begin by taking a closer look at the original Viveka murder case, including the key characters involved and the events leading up to the crime. RGV also examine the their possible connections to the case.\nThroughout the Interview, RGV will keep you updated on the latest developments in this ongoing case. So, if you're interested make sure to tune in and join us as we explore the Viveka murder case.\n\n#RGV #RGVnijam #vivekacase"
                },
                "defaultAudioLanguage": "en-IN"
            },
            "statistics": {
                "viewCount": "6012",
                "likeCount": "2471",
                "favoriteCount": "0",
                "commentCount": "490"
            }
        }
    ],
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    }
}

*/


// Search API 

const searchInput = document.getElementById("youtube-search");


async function loadData(searchString){
    const url = `https://www.googleapis.com/youtube/v3/search?part=${searchString}`;

const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchString}&type=video`);
const data = await response.json();

console.log(data)
  

}


searchInput.addEventListener("change", (e) => {
    const searchString = e.target.value ;
    loadData(searchString);
})
