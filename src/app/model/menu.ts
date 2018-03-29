export class Menu {
    public static list = [
        { id: 1, parentId: null, name: '主页', path: '/home', isActive: false },

        { id: 2, parentId: null, name: '例子', path: null , isActive: false},
        { id: 3, parentId: 2, name: '例子一', path: '/demo1' , isActive: false},
        { id: 4, parentId: 2, name: '例子二', path: '/demo2' , isActive: false},
        { id: 5, parentId: 4, name: '子功能一', path: '/subfunction1' , isActive: false},
        { id: 6, parentId: 4, name: '子功能二', path: '/subfunction2' , isActive: false},
        { id: 7, parentId: 4, name: '子功能三', path: '/subfunction3' , isActive: false},
        { id: 8, parentId: 4, name: '子功能四', path: '/subfunction4' , isActive: false},
        { id: 9, parentId: 4, name: '子功能五', path: '/subfunction5' , isActive: false},
        { id: 10, parentId: 4, name: '子功能六', path: '/subfunction6' , isActive: false},
        { id: 11, parentId: 4, name: '子功能七', path: '/subfunction7' , isActive: false},

        { id: 12, parentId: null, name: '用户管理', path: '/usermanager' , isActive: false},
        { id: 13, parentId: 12, name: '积分管理', path: '/usermanager/scoreManage' , isActive: false},
        { id: 14, parentId: 12, name: '信用管理', path: '/usermanager/creditManage' , isActive: false},
        { id: 15, parentId: 12, name: '权限管理', path: '/usermanager/permissionMange' , isActive: false},
        { id: 16, parentId: 12, name: '分组管理', path: '/usermanager/groupManage' , isActive: false },

        { id: 17, parentId: null, name: '系统管理', path: null , isActive: false},
        { id: 18, parentId: 17, name: '功能一', path: '/function1', isActive: false },
        { id: 19, parentId: 17, name: '功能二', path: '/function2' , isActive: false},
        { id: 20, parentId: 17, name: '功能三', path: '/function3', isActive: false }
    ];

    id: number;
    parentId: number;
    name: string;
    path: string;
    isActive: boolean;
}
