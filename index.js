  //data 

  var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

//dynamic dom elements

var content = document.getElementById('content');
var displayNameOne = document.getElementById('display-name-one');
var displayNameTwo = document.getElementById('display-name-two');
var usernameOne = document.getElementById('username-one');
var joinedDate = document.getElementById('joined-date');
var following = document.getElementById('following');
var followers = document.getElementById('followers');
var followersRounded = numFormatter(user1.followerCount);
var wallpaper = document.getElementById("wallpaper").style.cssText+=`background-image:url(${user1.coverPhotoURL}); background-size:cover;`;
var tweetsContainer = document.getElementById('container-tweets');

//fill dom elements with json data
displayNameOne.innerHTML = `${user1.displayName}`;
displayNameTwo.innerHTML = `<span class="pr-5">${user1.displayName}</span><i class="fa-solid fa-circle-check"></i>`;
usernameOne.innerHTML = `${user1.userName}`;
joinedDate.innerHTML = `<i class="fa-solid fa-calendar-days pr-5"></i>Joined ${user1.joinedDate}`;
following.innerHTML = `<b>${user1.followingCount}</b> Following`;
followers.innerHTML = `<b>${followersRounded}</b> Followers`;
/*
tweetInfo.innerHTML = `<span class="tweet-user">${user1.displayName}</span><span>${user1.userName}</span><span>${user1.tweets[0].timestamp}</span>`;
tweetBody.innerHTML = `${user1.tweets[0].text}`;
*/
var tweetDiv = document.createElement("div");
tweetDiv.classList.add("tweet-div")
tweetDiv.innerHTML = `
    <div class="tweet-avatar"><img src="${user1.avatarURL}"/></div>
    <div class="tweet-inner-container">
        <div class="tweet-details">
            <div class="tweet-display-name">
                <p>${user1.displayName}
                    <span class="fa-stack">
                        <i class="fa fa-circle-thin fa-stack-1x"></i>
                        <i class="fa fa-check-circle fa-stack-1x"></i>
                    </span> 
                </p>
            </div>
            <div class="subtext user-name">${user1.userName}</div>
            <div class="tweet-created">${user1.tweets[0].timestamp}</div>
        </div>
        <div class="tweet-body">
            <p>${user1.tweets[0].text}</p>
        </div>
        <div class="tweet-icons">
            <div class="tweet-icon reply"><a href="#"><i class="fa fa-comment"></i></a></div>
            <div class="tweet-icon retweet"><a href="#"><i class="fa fa-retweet"></i></a></div>
            <div class="tweet-icon like"><a href="#"><i class="fa fa-heart"></i></a></div>
            <div class="tweet-icon share"><a href="#"><i class="fa fa-upload"></i></a></div>
        </div>
    </div>
`;
tweetsContainer.appendChild(tweetDiv);

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}





//OG scripts
function main() {
    const back = document.querySelector(".arrow_back");
  
    back.innerHTML =
      '<svg viewBox="0 0 24 24" class="r-61mi1v r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>';
  
    const tabs = document.querySelectorAll(".tabs > div");
  
    const selectTab = (tab) => () => {
      tabs.forEach(tab => tab.classList.remove("selected"));
      tab.classList.add("selected");
    };
  
    tabs.forEach(tab => {
      tab.addEventListener("click", selectTab(tab));
    });
  }
  
  window.addEventListener("load", main);
  
  
  function switchTheme() {
     document.body.classList.toggle('light-theme');
     // document.body.classList.toggle('dark-theme');
  }



