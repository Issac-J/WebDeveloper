const tweetForm = document.querySelector("#tweetForm");
const tweetsEl = document.querySelector("#tweets");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInputEl = tweetForm.elements.username;
  const tweetInputEl = tweetForm.elements.tweet;

  // Create Elements
  const tweetContainer = document.createElement("li");
  const newUsername = document.createElement("b");
  //   const newTweet = document.createElement("span");

  // Insert Content
  newUsername.append(usernameInputEl.value);

  // Append
  tweetsEl.append(tweetContainer);
  tweetContainer.append(newUsername);
  tweetContainer.append(`${-tweetInputEl.value}`);
});
