const config = require("../config.json");
const axios = require("axios");
const users = require("./users.json");
const usersData = [...users];

// Delay used to separate post creation times.
const DEF_DELAY = 130000;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
}

const generateUsersAndPosts = async () => {
  for (let i = 0; i < usersData.length; i++) {
    try {
      const {
        data: { token },
      } = await axios.post(`${config.apiUrl}/users/`, {
        username: usersData[i].username,
        password: usersData[i].password,
        fullName: usersData[i].fullName,
      });
      // Save Token
      usersData[i]["token"] = token;

      // Create a post
      try {
        await axios.post(
          `${config.apiUrl}/posts/`,
          {
            description: usersData[i].post.description,
          },
          { headers: { authorization: `Bearer ${usersData[i].token}` } }
        );
      } catch (error) {
        console.log(error.response);
      }
    } catch (error) {
      console.log(error.response);
    }
    // Spread creation times
    await sleep();
  }
};

const interactWithPosts = async () => {
  // Interact with created posts.
  try {
    for (let i = 0; i < usersData.length; i++) {
      // to be implemented
    }
  } catch (error) {}
};

const run = async () => {
  await generateUsersAndPosts();
  await interactWithPosts();
};

run();
