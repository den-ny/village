// export const getMessages = async () => {
//   try {
//     const response = await fetch('https://ga-hackathon-backend.herokuapp.com/messages')
//     const json = await response.json()
//     return json
//   } catch (error) {
//     console.log(error)
//   }
// };

// export const getMessageById = async (id) => {
//   try {
//     const response = await fetch(`https://ga-hackathon-backend.herokuapp.com/messages/${id}`)
//     const json = await response.json()
//     return json
//   } catch (error) {
//     console.log(error)
//   }
// };

// export const createMessage = async (message) => {
//   try {
//     await fetch(`https://ga-hackathon-backend.herokuapp.com/messages/`, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(message)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// };