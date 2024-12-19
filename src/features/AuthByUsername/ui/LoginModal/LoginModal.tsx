import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import s from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        onClose,
        isOpen,
    } = props;

    return (
        <Modal
            className={classNames(s.LoginModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
