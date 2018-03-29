import { Menu } from './menu';

export class MenuViewModel {

    public static items: MenuViewModel[] = MenuViewModel.rescuriop(Menu.list);

    id: number;
    name: string;
    path: string;
    isActive: boolean;
    hasChild: boolean;
    childs: MenuViewModel[];

    private static rescuriop(list: Menu[]): MenuViewModel[] {
        const retlist: MenuViewModel[] = [];
        list.forEach(item => {
            const targetView: MenuViewModel = this.getviewmodel(item);
            if (item.parentId == null) {
                retlist.push(targetView);
            } else {
                const pp = retlist.find(i => i.id === item.parentId);
                if (pp) {
                    pp.hasChild = true;
                    pp.childs.push(targetView);
                }
            }
        });

        return retlist;
    }

    private static getviewmodel(item: Menu): MenuViewModel {
        let ret: MenuViewModel;
        ret = new MenuViewModel();
        ret.id = item.id;
        ret.name = item.name;
        ret.path = item.path;
        ret.isActive = item.isActive;
        ret.childs = [];
        return ret;
    }
}
