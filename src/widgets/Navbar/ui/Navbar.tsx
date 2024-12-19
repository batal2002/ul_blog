import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
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

    const onOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>

            <LoginModal isOpen={isOpen} onClose={onCloseModal} />
        </div>
    );
};
