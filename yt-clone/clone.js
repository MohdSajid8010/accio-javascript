const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-input");
const apiKey = "AIzaSyA5SRKyu5w7Y9q7VXeClI9IxhD9m3nP7ao";
let videosData = [] ;
const videosContainer = document.getElementById("videos-container");

async function loadDataOfSingleVideo(videoId){
    const part = "statistics,snippet";
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=${part}` ;
    const response = await fetch(url);
    const data = await response.json();
    videosData.push(data);
}

function createVideoCard(video) {
    const div = document.createElement("div");
    div.className = "video-item"
    const img = document.createElement("img");
    img.src = video.items[0].snippet.thumbnails.default.url; 
    div.appendChild(img);
    const likeElement = document.createElement("b");
    const { 
        viewCount,
        likeCount,
        favoriteCount,
        commentCount
    } = video.items[0].statistics
    /*
        <div class="video-item">
            <img src="" alt="">
            <div class="right-container">
                <div>
                    <b>title</b>
                </div>
                <div>
                    description
                </div>
                <div class="statistics">
                    <b>Likes: 10</b>
                </div>
            </div>
        </div>
    
    */
   const rightContainer = document.createElement("div");
   rightContainer.className = "right-container";

   const title = document.createElement("p");
    const description = document.createElement("p");
    title.innerText = video.items[0].snippet.title
    description.innerText = video.items[0].snippet.description;
    title.className = "title";
    description.className = "description"

   rightContainer.appendChild(title);
   rightContainer.appendChild(description);
    rightContainer.className = "right-container" 
    
   likeElement.innerText = `Likes: ${likeCount}`
    const viewElement = document.createElement("b");
    viewElement.innerText = `Views : ${viewCount}`
    const commentElement = document.createElement('b')
    commentElement.innerText = `Comments : ${commentCount}`

   const statsContainer = document.createElement("div")
   statsContainer.appendChild(likeElement);
   statsContainer.appendChild(viewElement);
   statsContainer.appendChild(commentElement);

   rightContainer.appendChild(statsContainer);

   div.appendChild(rightContainer);



    return div ;
}

function appendAllDataOntoUI() {
    videosContainer.innerHTML = '';
    videosData.forEach((video) => {
        videosContainer.appendChild(createVideoCard(video));
    })
}

async function loadData(searchString) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchString}&type=video`;
    videosData = [];
    /*
        items": [
            {
                "kind": "youtube#searchResult",
                "etag": "wsUtp4RyD0NXo1myb8_4nhfOQY4",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "I18qgLc5_x4"
                }
            },
        ]
    */
    const response = await fetch(url);
    const data = await response.json();
    const videoItems = data.items.map((video) => {
        return video.id.videoId
    })

    const promisesList = [] 

    videoItems.forEach((videoId) => {
        const promise = loadDataOfSingleVideo(videoId);
        promisesList.push(promise);
    })

    const finalPromise = Promise.all(promisesList);

    finalPromise.then((data) => {
        appendAllDataOntoUI();
    })
    finalPromise.catch(() => {
        alert("Something went wrong")
    });

}

searchButton.addEventListener("click", (e) => {
    const searchedValue = searchInput.value;
    if (!searchedValue) {
        alert("Please enter some value");
    }
    else {
        loadData(searchedValue);
    }
})