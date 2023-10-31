const UserModel = (sequelize, type) => sequelize.define('User', {
    userId: {
      type: type.UUID,
      primaryKey: true,
      defaultValue: type.UUIDV4,
    },
    first_name: type.STRING,
    last_name: type.STRING,
    email: {
      type: type.STRING,
      allowNull: false,
    },
    username: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
    verifyProfileToken: type.STRING,
    verificationTokenExpires: type.DATE,
    otpToken: type.STRING,
    otpExpires: type.DATE,
    status: {
      type: type.ENUM('blocked', 'verified', 'unverified'),
      defaultValue: 'unverified',
    },
  });
 
export default UserModel;