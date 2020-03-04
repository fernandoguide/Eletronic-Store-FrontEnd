import React, { useState, useEffect } from 'react';
import {
    Container,
    ContainerForm,
    Form,
    ButtonLogin,
    LinkForgot,
    DivTabs,
    ButtonTabs,
} from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import CarouselSlides from '../../components/Carousel';
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs';

const Tab = ({ children }) => {
    const { onClick } = useTabState();

    return <ButtonTabs onClick={onClick}>{children}</ButtonTabs>;
};

const Panel = ({ children }) => {
    const isActive = usePanelState();

    return isActive ? <p>{children}</p> : null;
};

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        }
    }, [isLoading]);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
    }

    return (
        <Container>
            <CarouselSlides />

            <ContainerForm>
                <Tabs>
                    <DivTabs>
                        <Tab>Login</Tab>
                        <Tab>Cadastro</Tab>
                    </DivTabs>

                    <Panel>
                        <Form>
                            <InputWithIcon
                                value={user}
                                placeholder="Digite seu usuário"
                                onChange={text => setUser(text.target.value)}
                                nameIcon="person"
                            />
                            <InputWithIcon
                                value={password}
                                type="password"
                                placeholder="Digite sua senha"
                                onChange={text =>
                                    setPassword(text.target.value)
                                }
                                nameIcon="lock"
                            />
                            <LinkForgot href="#">
                                Esqueci minha senha
                            </LinkForgot>
                            <ButtonLogin
                                disabled={isLoading}
                                onClick={!isLoading ? handleSubmit : null}
                                type="submit"
                            >
                                {isLoading ? 'Loading…' : 'Entrar'}
                            </ButtonLogin>
                        </Form>
                    </Panel>
                    <Panel>
                        <Form>
                            <InputWithIcon
                                value={user}
                                placeholder="Digite seu usuário"
                                onChange={text => setUser(text.target.value)}
                                nameIcon="person"
                            />
                            <InputWithIcon
                                value={password}
                                type="password"
                                placeholder="Digite sua senha"
                                onChange={text =>
                                    setPassword(text.target.value)
                                }
                                nameIcon="lock"
                            />
                            <InputWithIcon
                                value={password}
                                type="password"
                                placeholder="Repita sua senha"
                                onChange={text =>
                                    setPassword(text.target.value)
                                }
                                nameIcon="lock"
                            />

                            <ButtonLogin
                                disabled={isLoading}
                                onClick={!isLoading ? handleSubmit : null}
                                type="submit"
                            >
                                {isLoading ? 'Loading…' : 'Registrar'}
                            </ButtonLogin>
                        </Form>
                    </Panel>
                </Tabs>
            </ContainerForm>
        </Container>
    );
}
