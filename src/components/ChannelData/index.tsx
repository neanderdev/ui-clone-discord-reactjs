import { useRef, useEffect, MutableRefObject } from 'react';

import ChannelMessage from '../ChannelMessage';

import {
    Container,
    Messages,
    InputWrapper,
    Input,
    InputIcon,
    Mention,
} from './styles';

export default function ChannelData() {
    const messagesRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author='Neander Souza'
                    date='14/02/2023 12:00'
                    content='Hoje é dia de codar devs...'
                />

                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author={`User ${n}`}
                        date='14/02/2023 12:30'
                        content='Bora codar!'
                    />
                ))}

                <ChannelMessage
                    author='Bot 1'
                    date='14/02/2023 13:00'
                    content={
                        <>
                            <Mention>@Neander Souza</Mention>, let'go Javascript my bro!!!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input
                    type='text'
                    placeholder='Conversar em chat-live'
                />

                <InputIcon />
            </InputWrapper>
        </Container>
    );
}
