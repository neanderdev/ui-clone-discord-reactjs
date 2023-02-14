import {
    Container,
    Profile,
    Avatar,
    UserData,
    Icons,
    MicIcon,
    HeadphoneIcon,
    SettingsIcon,
} from './styles';

export default function UserInfo() {
    return (
        <Container>
            <Profile>
                <Avatar />

                <UserData>
                    <strong>Neander Souza</strong>

                    <span>#2011</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />

                <HeadphoneIcon />

                <SettingsIcon />
            </Icons>
        </Container>
    );
}
