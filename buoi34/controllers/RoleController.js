const permissionUtil = require("../utils/permisson");
const model = require("../models/index");
const Role = model.Role;
const Permission = model.Permission;
const RoleMiddleware = require("../middlewares/RoleMiddleware");

module.exports = {
  index: async (req, res) => {
    const roles = await Role.findAll();
    const permissions = await RoleMiddleware(req);
    console.log(permissions);
    const readPermission = permissionUtil.read(permissions);
    const editPermission = permissionUtil.edit(permissions);
    const addPermission = permissionUtil.add(permissions);
    const deletePermission = permissionUtil.delete(permissions);
    res.render("roles/index", {
      roles,
      readPermission,
      editPermission,
      addPermission,
      deletePermission,
    });
  },

  add: async (req, res) => {
    res.render("roles/add");
  },

  handleAdd: async (req, res) => {
    const { name, permission } = req.body;
    const role = await Role.create({
      name,
    });

    if (permission) {
      let dataPermission = [];
      if (typeof permission === "string") {
        dataPermission.push({
          value: permission,
        });
      } else {
        dataPermission = permission.map((item) => ({ value: item }));
      }

      dataPermission.forEach(async (item) => {
        const permissonIntance = await Permission.findOne({
          where: item,
        });
        if (!permissonIntance) {
          await role.createPermission(item);
        } else {
          await role.addPermission(permissonIntance);
        }
      });
    }

    res.redirect("/roles");
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const role = await Role.findOne({
      where: {
        id,
      },
      include: {
        model: Permission,
      },
    });

    const roles = await Role.findAll();

    const { Permissions: permissions } = role;

    console.log(permissionUtil.get(permissions, "users.read"));

    res.render("roles/edit", { role, roles, permissions, permissionUtil });
  },

  handleEdit: async (req, res) => {
    const { id } = req.params;

    const { name, permission } = req.body;

    //Cập nhật bảng role
    await Role.update(
      {
        name,
      },
      {
        where: {
          id,
        },
      },
    );

    const role = await Role.findOne({
      where: {
        id,
      },
    });

    if (permission) {
      let dataPermission = [];
      if (typeof permission === "string") {
        dataPermission.push({
          value: permission,
        });
      } else {
        dataPermission = permission.map((item) => ({ value: item }));
      }

      //Xóa tất cả permission theo role
      // const permissionList = await Permission.findAll();
      // await role.removePermissions(permissionList);

      dataPermission.forEach(async (item) => {
        const permissonIntance = await Permission.findOne({
          where: item,
        });
        if (!permissonIntance) {
          await role.createPermission(item);
        }
      });

      const permissonsUpdate = await Promise.all(
        dataPermission.map((item) => Permission.findOne({ where: item })),
      );

      role.setPermissions(permissonsUpdate);
    }

    res.redirect("/roles/edit/" + id);
  },

  delete: async (req, res) => {
    //Lấy role cần xóa
    const { id } = req.params;
    //Lấy instance của role cần xóa
    const role = await Role.findOne({ where: { id } });

    //Xóa tất cả Permission liên quan đến Role cần xóa
    await role.removePermissions(await Permission.findAll());

    //Xóa Role
    await Role.destroy({
      where: { id },
    });

    res.redirect("/roles");
  },
};
