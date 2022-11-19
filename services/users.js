// import api from "./apiConfig.js";

export const getUsers = async () => {
  try {
    const response = await fetch('https://ga-hackathon-backend.herokuapp.com/users')
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`https://ga-hackathon-backend.herokuapp.com/users/${id}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
};

export const createUser = async (user) => {
  try {
    await fetch(`https://ga-hackathon-backend.herokuapp.com/users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
  } catch (error) {
    console.log(error)
  }
};







// export const getUsers = async () => {
//   try {
//     const response = await api.get("/users");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const login = async (userData) => {
//   try {
//     const response = await api.post("/users", userData)
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };