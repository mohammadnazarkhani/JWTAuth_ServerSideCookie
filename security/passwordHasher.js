import bcrypt from "bcrypt";

// Get needed evironment variables
const slatRounds = parseInt(process.env.BCRYPT_SALT_ROUND, 10) || 10;

// @desc    Password hasher function
export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, slatRounds);
  return hashedPassword;
};

// @desc    Compare password vs hashedPassowrd for validation checking
export const checkPassowrd = async (password, hashedPasswor) => {
  const isMatch = await bcrypt.compare(password, hashPassword);
  return isMatch;
};
