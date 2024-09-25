import User from "./userModel.js";

/* Creation */

// @desc    Function to add a new user
export const addUser = async (username, email, password) => {
  const user = new User({
    username,
    email,
    password,
  });

  try {
    const savedUser = await user.save();
    console.log("User saved: ", savedUser);
  } catch (error) {
    console.error("Error saving user: ", error);
  }
};

/* Read */

// @desc    Returns all users
export const fetchAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetchin users: ", error);
  }
};

// @desc    Returns user with specified username
export const fetchUserByUsername = async (username) => {
  try {
    const user = await user.findOne({ username });
    if (user) {
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetchin user:", error);
  }
};

/* Update */

// @desc    Updates user's password
export const updateUserPassword = async (username, newPassword) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { username },
      { password: newPassword },
      { new: true, runValidators: true }
    );

    if (updatedUser) {
      console.log("Updated user password successfullly!");
      return true;
    } else {
      console.log("User not found");
      return false;
    }
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};

/* Delete */

// @desc    Deletes the user
// @returns true if user deleted successfully. flase if user not found.
export const deleteUserByUsername = async (username) => {
  try {
    const deletedUser = await User.findOneAndDelete({ username });
    if (deletedUser) {
      console.log("User deleted successfully!");
      return true;
    } else {
      console.log("User Not Found!");
      return false;
    }
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
};
