import { ReactElement, ReactNode } from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';

export interface ChannelMessageProps {
    author: string;
    date: string;
    content: string | ReactElement | ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

export default function ChannelMessage({
    author,
    date,
    content,
    hasMention,
    isBot,
}: ChannelMessageProps) {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={hasMention ? 'bot' : ''} />

            <Message>
                <Header>
                    <strong>
                        {author}
                    </strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>

                <Content>
                    {content}
                </Content>
            </Message>
        </Container>
    );
}
