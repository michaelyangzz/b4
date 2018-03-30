export class HeaderItem {
    public static list: HeaderItem[] = [
        { id: 1, name: null, iconName: 'oi oi-home', path: 'home', isActive: false, disabled: false, childs: [], isOpen: false },
        {
            id: 2, name: '模块而', iconName: null, path: null, isActive: true, disabled: false,
            childs:
                [
                    {
                        id: 3, name: '模块而', iconName: 'oi oi-command',
                        path: 'demo1', isActive: true, disabled: false, childs: [], isOpen: false
                    },
                    {
                        id: 4, name: '模块而', iconName: 'oi oi-dashboard',
                        path: 'demo1', isActive: true, disabled: false, childs: [], isOpen: false
                    },
                    {
                        id: 5, name: '模块而', iconName: null,
                        path: 'demo1', isActive: true, disabled: false, childs: [], isOpen: false
                    },
                    {
                        id: 6, name: '模块而', iconName: null,
                        path: 'demo2', isActive: true, disabled: false, childs: [], isOpen: false
                    },
                    {
                        id: 7, name: '模块而', iconName: null, path: 'demo2', isActive: true, disabled: false,
                        childs:
                            [
                                {
                                    id: 8, name: '左边功能1', iconName: 'oi oi-command', path: 'demo1', isActive: false,
                                    disabled: false, childs: [], isOpen: false
                                },
                                {
                                    id: 9, name: '左边功能2', iconName: 'oi oi-command', path: 'demo1', isActive: false,
                                    disabled: false, childs: [], isOpen: false
                                },
                                {
                                    id: 10, name: '左边功能3', iconName: 'oi oi-command', path: 'demo1', isActive: false, disabled: false,
                                    childs:
                                        [
                                            {
                                                id: 11, name: '左边功能33', iconName: 'oi oi-bluetooth',
                                                path: 'demo1', isActive: false,
                                                disabled: false, childs: [], isOpen: false
                                            },
                                            {
                                                id: 12, name: '左边功能33', iconName: 'oi oi-bullhorn',
                                                path: 'demo1', isActive: false,
                                                disabled: false, childs:
                                                    [
                                                        {
                                                            id: 13, name: '左边功能333', iconName: 'oi oi-bold',
                                                            path: 'demo1', isActive: false,
                                                            disabled: false, childs: [], isOpen: false
                                                        },
                                                        {
                                                            id: 14, name: '左边功能333', iconName: 'oi oi-cart',
                                                            path: 'demo1', isActive: false,
                                                            disabled: false, childs: [], isOpen: false
                                                        }
                                                    ], isOpen: false
                                            }
                                        ], isOpen: false
                                },
                                {
                                    id: 15, name: '左边功能4', iconName: 'oi oi-command', path: 'demo2',
                                    isActive: false, disabled: false, childs: [], isOpen: false
                                }
                            ], isOpen: false
                    }
                ], isOpen: false
        },
        {
            id: 16, name: '模块而', iconName: null, path: null, isActive: false, disabled: false,
            childs:
                [
                    {
                        id: 17, name: '模块而', iconName: null,
                        path: 'function1', isActive: true, disabled: false,
                        childs: [], isOpen: false
                    },
                    {
                        id: 18, name: '模块而', iconName: null,
                        path: 'function1', isActive: true, disabled: false, childs: [], isOpen: false
                    },
                    {
                        id: 19, name: '模块而', iconName: null,
                        path: 'function1', isActive: true, disabled: false, childs: [], isOpen: false
                    },
                    {
                        id: 20, name: '模块而', iconName: null,
                        path: 'function1', isActive: true, disabled: false, childs: [], isOpen: false
                    },
                    {
                        id: 21, name: '模块而', iconName: null,
                        path: 'function1', isActive: true, disabled: true, childs: [], isOpen: false
                    }
                ], isOpen: false
        },
        {
            id: 22, name: '模块三',
            iconName: null, path: 'subfunction1', isActive: false, disabled: true, childs: [], isOpen: false
        },
        {
            id: 23, name: '模块三',
            iconName: null, path: 'subfunction1', isActive: false, disabled: false, childs: [], isOpen: false
        }
    ];
    public static list2: HeaderItem[] = [];
    id: number;
    name: string;
    iconName: string;
    path: string;
    isActive = false;
    disabled = false;
    isOpen = false;
    childs: HeaderItem[] = [];
}

export class HeaderEntity {
    public list = [
        { id: 1, parentId: null, name: 'Menu1', iconName: null, path: 'home' },
        { id: 2, parentId: 1, name: 'Menu1.1', iconName: null, path: 'home' },
        { id: 3, parentId: 1, name: 'Menu1.2', iconName: null, path: 'home' },
        { id: 4, parentId: 3, name: 'Menu1.2.1', iconName: null, path: 'home' },
        { id: 5, parentId: 3, name: 'Menu1.2.2', iconName: null, path: 'home' },
        { id: 6, parentId: 1, name: 'Menu1.3', iconName: null, path: 'home' },

        { id: 7, parentId: null, name: 'Menu2', iconName: null, path: 'home' },
        { id: 8, parentId: null, name: 'Menu3', iconName: null, path: 'home' },

        { id: 9, parentId: null, name: 'Menu4', iconName: null, path: 'home' },
        { id: 10, parentId: 9, name: 'Menu4.1', iconName: null, path: 'home' },
        { id: 11, parentId: 9, name: 'Menu4.2', iconName: null, path: 'home' },
        { id: 12, parentId: 9, name: 'Menu4.3', iconName: null, path: 'home' },

        { id: 13, parentId: 9, name: 'Menu4.4', iconName: null, path: 'home' },
        { id: 14, parentId: 13, name: 'Menu4.4.1', iconName: null, path: 'home' },
        { id: 15, parentId: 13, name: 'Menu4.4.2', iconName: null, path: 'home' },
        { id: 16, parentId: 13, name: 'Menu4.4.3', iconName: null, path: 'home' },

        { id: 17, parentId: 13, name: 'Menu4.4.4', iconName: null, path: 'home' },

        { id: 18, parentId: 17, name: 'Menu4.4.4.1', iconName: null, path: 'home' },
        { id: 19, parentId: 18, name: 'Menu4.4.4.1.1', iconName: null, path: 'home' },
        { id: 20, parentId: 18, name: 'Menu4.4.4.1.2', iconName: null, path: 'home' },
        { id: 21, parentId: 18, name: 'Menu4.4.4.1.3', iconName: null, path: 'home' },
        { id: 22, parentId: 18, name: 'Menu4.4.4.1.4', iconName: null, path: 'home' },
        { id: 23, parentId: 18, name: 'Menu4.4.4.1.5', iconName: null, path: 'home' },

        { id: 24, parentId: 17, name: 'Menu4.4.4.2', iconName: null, path: 'home' },

        { id: 25, parentId: 13, name: 'Menu4.4.5', iconName: null, path: 'home' },

        { id: 26, parentId: 9, name: 'Menu4.5', iconName: null, path: 'home' },

        { id: 27, parentId: null, name: 'Menu5', iconName: null, path: 'home' },
        { id: 28, parentId: null, name: 'Menu6', iconName: null, path: 'home' }
    ];
    id: number;
    parentId: number;
    name: string;
    iconName: string;
    path: string;
}

export function ConvertViewModel(items: HeaderEntity[]) {
    HeaderItem.list2 = [];
    items.filter(x => x.parentId == null)
        .map(x => {
            return {
                id: x.id,
                name: x.name,
                iconName: x.iconName,
                path: x.path,
                isActive: false,
                disabled: false,
                isOpen: false,
                childs: []
            };
        })
        .forEach(every => {
            HeaderItem.list2.push(every);

        }
        );


}
