export class HeaderItem {
    id: number;
    name: string;
    iconName: string;
    path: string;
    isActive = false;
    disabled = false;
    isOpen = false;
    isExpand = false;
    childs: HeaderItem[] = [];
}

export class HeaderEntity {
    public static list = [
        { id: 1, parentId: null, name: 'Menu1', iconName: 'oi oi-home', path: null },
        { id: 2, parentId: 1, name: 'Menu1.1', iconName: 'oi oi-bold', path: 'home' },
        { id: 3, parentId: 1, name: 'Menu1.2', iconName: 'oi oi-command', path: 'home' },
        { id: 4, parentId: 3, name: 'Menu1.2.1', iconName: 'oi oi-command', path: 'home' },
        { id: 5, parentId: 3, name: 'Menu1.2.2', iconName: 'oi oi-command', path: 'home' },
        { id: 6, parentId: 1, name: 'Menu1.3', iconName: 'oi oi-command', path: 'home' },

        { id: 7, parentId: null, name: 'Menu2', iconName: 'oi oi-command', path: 'home' },
        { id: 8, parentId: null, name: 'Menu3', iconName: 'oi oi-command', path: 'home' },

        { id: 9, parentId: null, name: 'Menu4', iconName: 'oi oi-command', path: null },
        { id: 10, parentId: 9, name: 'Menu4.1', iconName: 'oi oi-command', path: 'home' },
        { id: 11, parentId: 9, name: 'Menu4.2', iconName: 'oi oi-command', path: 'home' },
        { id: 12, parentId: 9, name: 'Menu4.3', iconName: 'oi oi-command', path: 'home' },

        { id: 13, parentId: 9, name: 'Menu4.4', iconName: 'oi oi-command', path: 'home' },
        { id: 14, parentId: 13, name: 'Menu4.4.1', iconName: 'oi oi-command', path: 'home' },
        { id: 15, parentId: 13, name: 'Menu4.4.2', iconName: 'oi oi-command', path: 'home' },
        { id: 16, parentId: 13, name: 'Menu4.4.3', iconName: 'oi oi-command', path: 'home' },

        { id: 17, parentId: 13, name: 'Menu4.4.4', iconName: 'oi oi-command', path: 'home' },

        { id: 18, parentId: 17, name: 'Menu4.4.4.1', iconName: 'oi oi-command', path: 'home' },
        { id: 19, parentId: 18, name: 'Menu4.4.4.1.1', iconName: 'oi oi-command', path: 'home' },
        { id: 20, parentId: 18, name: 'Menu4.4.4.1.2', iconName: 'oi oi-command', path: 'home' },
        { id: 21, parentId: 18, name: 'Menu4.4.4.1.3', iconName: 'oi oi-command', path: 'home' },
        { id: 22, parentId: 18, name: 'Menu4.4.4.1.4', iconName: 'oi oi-command', path: 'home' },
        { id: 23, parentId: 18, name: 'Menu4.4.4.1.5', iconName: 'oi oi-command', path: 'home' },

        { id: 24, parentId: 17, name: 'Menu4.4.4.2', iconName: 'oi oi-command', path: 'home' },

        { id: 25, parentId: 13, name: 'Menu4.4.5', iconName: 'oi oi-command', path: 'home' },

        { id: 26, parentId: 9, name: 'Menu4.5', iconName: 'oi oi-command', path: 'home' },

        { id: 27, parentId: null, name: 'Menu5', iconName: 'oi oi-command', path: 'home' },
        { id: 28, parentId: null, name: 'Menu6', iconName: 'oi oi-command', path: 'home' }
    ];
    id: number;
    parentId: number;
    name: string;
    iconName: string;
    path: string;
}

export function ConvertViewModel(list) {
    const map = {};
    let node;
    const roots = [];
    let i;
    for (i = 0; i < list.length; i++) {
        map[list[i].id] = i; // initialize the map
        list[i].isActive = false; // initialize the children
        list[i].disabled = false;
        list[i].isOpen = false;
        list[i].childs = [];
        list[i].isExpand = false;
    }
    for (i = 0; i < list.length; i++) {
        node = list[i];
        if (node.parentId !== null) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parentId]].childs.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}
