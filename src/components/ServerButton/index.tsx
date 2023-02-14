import { Button } from './styles';

import Logo from '../../assets/Logo.svg';

export interface ServerButtonProps {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

export default function ServerButton({
    selected,
    isHome,
    hasNotifications,
    mentions
}: ServerButtonProps) {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt='Rocketseat' />}
        </Button>
    );
}
