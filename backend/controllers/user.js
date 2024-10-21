/**
 * @typedef {Object} User
 * @property {number} id - The unique identifier of the user.
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} status - The current status of the user (e.g., "active", "inactive").
 * @property {string} avatar - The URL of the user's avatar image.
 */

/**
 * Sample data representing a list of users.
 * @type {User[]}
 */
const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1728993919~exp=1728994519~hmac=cf265972b9dbc569b96ac898812e551d9949a1a6e26ac8638ff67adcef0011ba",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "inactive",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?w=1380&t=st=1729001033~exp=1729001633~hmac=216ef5877ef5c6475ea431dd9f5e45a2ba553546e779f8e945b39397060a448a",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "active",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1380&t=st=1729001054~exp=1729001654~hmac=8885bcab9d1bc391494b5bbd5296bd86d173deb3383922068f175f8412e995ee",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    status: "inactive",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?w=1380&t=st=1729001084~exp=1729001684~hmac=8ad60cffd6a5965279d4cf2f312fe4ccaebcc5a974d31895b9410559c3f5c8ae",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    status: "active",
    avatar:
      "https://www.freepik.com/free-psd/3d-rendering-avatar_70822507.htm#query=avatar&position=5&from_view=keyword&track=ais_hybrid-rr-similar&uuid=3e20655c-e9c3-498f-b057-4f4259fdc240",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "inactive",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1380&t=st=1729001137~exp=1729001737~hmac=b6159626400b96f552ac3ea21c49a071cb86c026376928b269bdf5143862ef38",
  },
  {
    id: 7,
    name: "Chris Wilson",
    email: "chris.wilson@example.com",
    status: "active",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1728993919~exp=1728994519~hmac=cf265972b9dbc569b96ac898812e551d9949a1a6e26ac8638ff67adcef0011ba",
  },
  {
    id: 8,
    name: "Patricia Taylor",
    email: "patricia.taylor@example.com",
    status: "inactive",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?w=1380&t=st=1729001033~exp=1729001633~hmac=216ef5877ef5c6475ea431dd9f5e45a2ba553546e779f8e945b39397060a448a",
  },
  {
    id: 9,
    name: "Jessica Martin",
    email: "jessica.martin@example.com",
    status: "active",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1380&t=st=1729001054~exp=1729001654~hmac=8885bcab9d1bc391494b5bbd5296bd86d173deb3383922068f175f8412e995ee",
  },
  {
    id: 10,
    name: "David Thompson",
    email: "david.thompson@example.com",
    status: "inactive",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration/person-with-glasses_23-2149436191.jpg?w=1380&t=st=1729001084~exp=1729001684~hmac=8ad60cffd6a5965279d4cf2f312fe4ccaebcc5a974d31895b9410559c3f5c8ae",
  },
];

/**
 * Handles the request to retrieve the list of users.
 * Simulates a delayed response by waiting for 100ms before returning the data.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {void}
 */
const getUsers = async (req, res) => {
  try {
    // Simulating data fetching with a 100ms delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Sending user data as JSON
    res.json(usersData);
  } catch (error) {
    console.error("Error fetching users:", error);

    // Sending a 500 Internal Server Error response
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Exporting the getUsers function for use in other modules
module.exports = { getUsers };
