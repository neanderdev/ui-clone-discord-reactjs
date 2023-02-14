import UserRow from '../UserRow';

import { Container, Role } from './styles';

export default function UserList() {
    return (
        <Container>
            <Role>
                Disponível - 1
            </Role>

            <UserRow nickname='Neander Souza' />

            <Role>
                Offline - 18
            </Role>

            <UserRow nickname='Bot 1' isBot />

            <UserRow nickname='User 1' />

            <UserRow nickname='User 2' />

            <UserRow nickname='User 3' />

            <UserRow nickname='User 4' />

            <UserRow nickname='User 5' />

            <UserRow nickname='User 6' />

            <UserRow nickname='User 7' />

            <UserRow nickname='User 8' />

            <UserRow nickname='User 9' />

            <UserRow nickname='User 10' />

            <UserRow nickname='User 11' />

            <UserRow nickname='User 12' />

            <UserRow nickname='User 13' />

            <UserRow nickname='User 14' />

            <UserRow nickname='User 15' />

            <UserRow nickname='User 16' />

            <UserRow nickname='User 17' />
        </Container>
    );
}
