import * as bcrypt from 'bcrypt';

const encryptText = async (text: string) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(text, salt);
};

const StringUtils = {
  encrypt: encryptText,
};

export default StringUtils;
