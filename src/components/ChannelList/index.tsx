import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

export default function ChannelList() {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>

                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName='chat-livre' selected />

            <ChannelButton channelName='Trabalho' />

            <ChannelButton channelName='GTA RP' />

            <ChannelButton channelName='CS-GO' />

            <ChannelButton channelName='Valorant' />
        </Container>
    );
}
