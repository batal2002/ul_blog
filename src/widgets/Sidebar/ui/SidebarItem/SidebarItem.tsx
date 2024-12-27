import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

export const SidebarItem = (props: SidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;

    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(s.item, { [s.collapsed]: collapsed })}
        >
            <item.Icon className={s.icon} />
            <span className={s.link}>{t(item.text)}</span>

        </AppLink>
    );
};
