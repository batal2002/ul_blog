import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Consequatur ducimus impedit quasi voluptatibus.
                Ad fugit id itaque quam quo
                vero?
            </Modal>
        </div>
    );
};
