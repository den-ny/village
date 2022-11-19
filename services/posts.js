export const getPosts = async () => {
  try {
    const response = await fetch('https://ga-hackathon-backend.herokuapp.com/posts')
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
};

export const getPostById = async (id) => {
  try {
    const response = await fetch(`https://ga-hackathon-backend.herokuapp.com/posts/${id}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
};

export const createPost = async (post) => {
  try {
    await fetch(`https://ga-hackathon-backend.herokuapp.com/posts/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
  } catch (error) {
    console.log(error)
  }
};