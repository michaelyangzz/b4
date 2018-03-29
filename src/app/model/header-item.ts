export class HeaderItem {
    public static list: HeaderItem[] = [
        { id: 1, name: '主页', iconName: null, path: 'home', isActive: false, disabled: false, childs: [] },
        {
            id: 2, name: '模块而', iconName: null, path: null, isActive: true, disabled: false,
            childs:
                [
                    { id: 2, name: '模块而', iconName: null, path: 'demo1', isActive: true, disabled: false, childs: [] },
                    { id: 2, name: '模块而', iconName: null, path: 'demo1', isActive: true, disabled: false, childs: [] },
                    { id: 2, name: '模块而', iconName: null, path: 'demo1', isActive: true, disabled: false, childs: [] },
                    { id: 2, name: '模块而', iconName: null, path: 'demo2', isActive: true, disabled: false, childs: [] },
                    {
                        id: 2, name: '模块而', iconName: null, path: 'demo2', isActive: true, disabled: false,
                        childs:
                            [
                                { id: 2, name: '左边功能1', iconName: null, path: 'demo1', isActive: false, disabled: false, childs: [] },
                                { id: 2, name: '左边功能2', iconName: null, path: 'demo1', isActive: false, disabled: false, childs: [] },
                                {
                                    id: 2, name: '左边功能3', iconName: null, path: 'demo1', isActive: false, disabled: false,
                                    childs:
                                        [
                                            {
                                                id: 2, name: '左边功能33', iconName: null,
                                                path: 'demo1', isActive: false,
                                                disabled: false, childs: []
                                            },
                                            {
                                                id: 2, name: '左边功能33', iconName: null,
                                                path: 'demo1', isActive: false,
                                                disabled: false, childs:
                                                [
                                                    {
                                                        id: 2, name: '左边功能333', iconName: null,
                                                        path: 'demo1', isActive: false,
                                                        disabled: false, childs: []
                                                    },
                                                    {
                                                        id: 2, name: '左边功能333', iconName: null,
                                                        path: 'demo1', isActive: false,
                                                        disabled: false, childs: []
                                                    }
                                                ]
                                            },
                                        ]
                                },
                                { id: 2, name: '左边功能4', iconName: null, path: 'demo2', isActive: false, disabled: false, childs: [] }
                            ]
                    }
                ]
        },
        {
            id: 2, name: '模块而', iconName: null, path: null, isActive: false, disabled: false,
            childs:
                [
                    { id: 2, name: '模块而', iconName: null, path: 'function1', isActive: true, disabled: false, childs: [] },
                    { id: 2, name: '模块而', iconName: null, path: 'function1', isActive: true, disabled: false, childs: [] },
                    { id: 2, name: '模块而', iconName: null, path: 'function1', isActive: true, disabled: false, childs: [] },
                    { id: 2, name: '模块而', iconName: null, path: 'function1', isActive: true, disabled: false, childs: [] },
                    { id: 2, name: '模块而', iconName: null, path: 'function1', isActive: true, disabled: true, childs: [] }
                ]
        },
        { id: 3, name: '模块三', iconName: null, path: 'subfunction1', isActive: false, disabled: true, childs: [] },
        { id: 3, name: '模块三', iconName: null, path: 'subfunction1', isActive: false, disabled: false, childs: [] }
    ];

    id: number;
    name: string;
    iconName: string;
    path: string;
    isActive = false;
    disabled = false;
    childs: HeaderItem[] = [];
}
