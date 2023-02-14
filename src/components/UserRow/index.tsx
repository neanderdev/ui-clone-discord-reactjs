import { Container, Avatar } from './styles';

interface UserRowProps {
    nickname: string;
    isBot?: boolean;
}

export default function UserRow({ nickname, isBot }: UserRowProps) {
    return (
        <Container>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </Container>
    );
}
