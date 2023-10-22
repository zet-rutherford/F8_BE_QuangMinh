const { permission } = require("../controllers/UserController");

module.exports = {
  get: (data, permission) => {
    const permissionData = data.find(({ value }) => value === permission);
    if (permissionData) {
      return permissionData.value;
    }
  },

  isRole: (roleData, roleId) => {
    return roleData.find((role) => {
      return +role.id === +roleId;
    });
  },

  read: (permissionData) => {
    if (permissionData.includes("users.read")) {
      return true;
    }
  },
  edit: (permissionData) => {
    if (permissionData.includes("users.edit")) {
      return true;
    }
  },
  add: (permissionData) => {
    if (permissionData.includes("users.add")) {
      return true;
    }
  },
  delete: (permissionData) => {
    if (permissionData.includes("users.delete")) {
      return true;
    }
  },
};
