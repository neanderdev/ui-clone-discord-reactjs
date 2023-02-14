import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

export default function ServerList() {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />

            <ServerButton hasNotifications />

            <ServerButton mentions={3} />

            <ServerButton />

            <ServerButton hasNotifications />

            <ServerButton />

            <ServerButton mentions={5} />

            <ServerButton />

            <ServerButton hasNotifications />

            <ServerButton mentions={12} />

            <ServerButton />

            <ServerButton />

            <ServerButton hasNotifications />

            <ServerButton hasNotifications />
        </Container>
    );
}
