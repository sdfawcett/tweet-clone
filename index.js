  //data 

  var users = {
    user1: {
      userName: '@elonmusk',
      displayName: 'Elon Musk',
      joinedDate: 'June 2009',
      followingCount: 103,
      followerCount: 47900000,
      avatarURL: 'assets/elonmusk.jpg',
      coverPhotoURL: 'assets/elonmusk-cover.jpeg',
      tweets: [{
          text: 'I admit to judging books by their cover',
          timestamp: '1/10/2022 00:01:20'
        },
        {
          text: 'Starship to the moon',
          timestamp: '11/09/2021 18:37:12'
        },
        {
          text: 'Out on launch pad, engine swap underway',
          timestamp: '2/09/2020 12:11:51'
        }
      ]
    },

    user2: {
      userName: '@BillGates',
      displayName: 'Bill Gates',
      description: 'Sharing things I\'m learning through my foundation work and other interests.',
      location: 'Seattle, WA',
      urlLink: 'gatesnot.es/HowToAvoidCli...',
      joinedDate: 'June 2009',
      followingCount: 274,
      followerCount: 53800000,
      avatarURL: 'assets/billgates.jpg',
      coverPhotoURL: 'assets/billgates-cover.jpeg',
      tweets: [{
          text: 'Single and ready to mingle. #swipeRightForBill',
          timestamp: '3/05/2021 12:32:50'
        },
        {
          text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
          timestamp: '2/10/2020 00:01:20'
        },
        {
          text: 'Should I start tweeting memes? Let me know in a comment.',
          timestamp: '2/09/2020 18:37:12'
        },
        {
          text: 'In 2020, I read a book every hour.',
          timestamp: '2/09/2020 12:11:51'
        }
      ]
    }
  }

  //query string operations
  var urlParams = new URLSearchParams(window.location.search);
  const selectedUser = users[urlParams.get('user')] || users.user1;

  //declare variables
  var content = document.getElementById('content');
  var displayNameOne = document.getElementById('display-name-one');
  var displayNameTwo = document.getElementById('display-name-two');
  var usernameOne = document.getElementById('username-one');
  var joinedDate = document.getElementById('joined-date');
  var avatar = document.getElementById('avatar').style.cssText += `background-image:url(${selectedUser.avatarURL}); background-size:cover;`;
  var following = document.getElementById('following');
  var followers = document.getElementById('followers');
  var followersRounded = numFormatter(selectedUser.followerCount);
  var wallpaper = document.getElementById("wallpaper").style.cssText += `background-image:url(${selectedUser.coverPhotoURL}); background-size:cover;`;
  var tweetsContainer = document.getElementById('container-tweets');

  //fill dom elements with json data
  displayNameOne.innerHTML = `${selectedUser.displayName}`;
  displayNameTwo.innerHTML = `<span class="pr-5">${selectedUser.displayName}</span><i class="fa-solid fa-circle-check"></i>`;
  usernameOne.innerHTML = `${selectedUser.userName}`;
  joinedDate.innerHTML = `<i class="fa-solid fa-calendar-days pr-5"></i>Joined ${selectedUser.joinedDate}`;
  following.innerHTML = `<b>${selectedUser.followingCount}</b> Following`;
  followers.innerHTML = `<b>${followersRounded}</b> Followers`;


  //display relative time for each tweet (between now and when tweet was created)
  for (var i = 0; i < selectedUser.tweets.length; i++) {
    var tweetDiv = document.createElement("div");
    var tweetCreated = Date.parse(selectedUser.tweets[i].timestamp);
    tweetDiv.classList.add("tweet-div");

    /*convert json timestamp to millisecnds, then compare time elapsed between the timestamp created date and "now"*/

    // The time now
    var now = new Date().getTime();

    // The difference between now and created
    var howLongAgo = tweetCreated - now;

    //output tweets in dom
    tweetDiv.innerHTML = `
      <div class="tweet-avatar"><img src="${selectedUser.avatarURL}"/></div>
      <div class="tweet-inner-container">
          <div class="tweet-details">
              <div class="tweet-display-name">
                  <p>${selectedUser.displayName}
                      <i class="fa-solid fa-circle-check"></i> 
                      <span class="pl-15 subtext">${selectedUser.userName}</span>
                      <span class="pl-15 subtext">${getHumanTime(howLongAgo)}</span>
                  </p>
              </div>
              
          </div>
          <div class="tweet-body">
              <p>${selectedUser.tweets[i].text}</p>
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
  }

  //format the followers number to one decimal place and add a K or M
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  function getHumanTime(timestamp) {

    // Convert to a positive integer
    var time = Math.abs(timestamp);

    // Define humanTime and units
    var humanTime, units;

    // If there are years
    if (time > (1000 * 60 * 60 * 24 * 365)) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 365), 10);
      // make sure human time is grammatically correct
      if (humanTime === 1) {
        units = 'year';
      } else {
        units = 'years';
      }
    }

    // If there are months
    else if (time > (1000 * 60 * 60 * 24 * 30)) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 30), 10);
      // make sure human time is grammatically correct
      if (humanTime === 1) {
        units = 'month';
      } else {
        units = 'months';
      }
    }

    // If there are weeks
    else if (time > (1000 * 60 * 60 * 24 * 7)) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 7), 10);
      // make sure human time is grammatically correct
      if (humanTime === 1) {
        units = 'week';
      } else {
        units = 'weeks';
      }
    }

    // If there are days
    else if (time > (1000 * 60 * 60 * 24)) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24), 10);
      // make sure human time is grammatically correct
      if (humanTime === 1) {
        units = 'day';
      } else {
        units = 'days';
      }
    }

    // If there are hours
    else if (time > (1000 * 60 * 60)) {
      humanTime = parseInt(time / (1000 * 60 * 60), 10);
      // make sure human time is grammatically correct
      if (humanTime === 1) {
        units = 'hour';
      } else {
        units = 'hours';
      }
    }

    // If there are minutes
    else if (time > (1000 * 60)) {
      humanTime = parseInt(time / (1000 * 60), 10);
      // make sure human time is grammatically correct
      if (humanTime === 1) {
        units = 'minute';
      } else {
        units = 'minutes';
      }
    }

    // Otherwise, use seconds
    else {
      humanTime = parseInt(time / (1000), 10);
      units = 'seconds';
    }

    return humanTime + ' ' + units;

  };


  //tabs
  function main() {

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


  //theme switcher
  function switchTheme() {
    document.body.classList.toggle('light-theme');
    // document.body.classList.toggle('dark-theme');
  }

  //switch user profile
  function switchToElon() {
    var urlParams = new URLSearchParams();
    urlParams.set('user', 'user1');
    window.location.href = "http://127.0.0.1:5500/index.html?" + urlParams.toString();
  }

  function switchToBill() {
    var urlParams = new URLSearchParams();
    urlParams.set('user', 'user2');
    window.location.href = "http://127.0.0.1:5500/index.html?" + urlParams.toString();
  }