export const adminMenu = [
    { //quản lí người dùng
        name: 'menu.admin.manage-user', 
        menus: [
            { name: 'menu.admin.crud', link: '/system/user-manage' },
            { name: 'menu.admin.crud-redux', link: '/system/user-redux' },
            {
                name: 'menu.admin.manage-doctor', link: '/system/doctor'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            { name: 'menu.admin.manage-admin', link: '/system/user-admin' },
               // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
    { //quản lí phòng khám
        name: 'menu.clinics.clinic', 
        menus: [
            {
                name: 'menu.clinics.manage-clinic', link: '/system/manage-clinic'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            }
        ]
    },
    { //quản lí phòng khám
        name: 'menu.specialtys.specialty', 
        menus: [
            {
                name: 'menu.specialtys.manage-specialty', link: '/system/manage-specialty'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            }
        ]
    },
    { //quản lí cẩm nang
        name: 'menu.handbooks.handbook', 
        menus: [
            {
                name: 'menu.handbooks.manage-handbook', link: '/system/manage-handbook'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            }
        ]
    },
];