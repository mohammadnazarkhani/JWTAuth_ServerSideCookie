import bcrypt from "bcrypt";

// Get needed environment variables
const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUND, 10) || 10;

// @desc    Password hasher function
export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// @desc    Compare password vs hashedPassword for validation checking
export const checkPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
