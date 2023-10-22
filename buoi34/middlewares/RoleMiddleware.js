const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const Permission = model.Permission;

module.exports = async (req, res, next) => {
  if (req.user) {
    const { id } = req.user;

    const user = await User.findOne({
      where: {
        id,
      },
      include: {
        model: Role,
      },
    });

    const roles = user.Roles;
    //Lấy tất cả permission của từng Role
    var permissions = await Promise.all(
      roles.map(async ({ id }) => {
        const role = await Role.findOne({
          where: { id },
          include: {
            model: Permission,
          },
        });

        return role.Permissions;
      }),
    );

    permissions = permissions.map((item) => {
      return item.map(({ value }) => value);
    });

    permissions = [...new Set(permissions.flat(Infinity))];
    // console.log(permissions);

    // if (!permissions.includes("users.read")) {
    //   res.redirect("/");
    // }
    // next();
    return permissions;
  }
};
