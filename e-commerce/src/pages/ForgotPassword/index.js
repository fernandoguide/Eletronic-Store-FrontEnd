import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import {
    Container,
    ContainerForm,
    Form,
    ButtonForgot,
    Link,
    Text,
    CenterDiv,
    DivLink,
} from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import { Types as ForgotTypes } from '../../store/ducks/ForgotPassword'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

export default function ForgotPassword({ history }) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        }
    }, [isLoading]);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        if (email === '') {
            swal(
                'Opah!',
                'Parece que você se esqueceu de informar o seu email',
                'warning'
            );
            setLoading(false);
        } else {
            await dispatch({
                type: ForgotTypes.SET_FORGOT,
                payload: {
                    email: email.toLowerCase(),
                },
            });
            swal(
                'Enviado!',
                'Enviamos para o email informado a sua nova senha',
                'success'
            );
        }
    }

    return (
        <Container>
            <ContainerForm>
                <Form>
                    <DivLink>
                        <Text>Informe seu email cadastrado</Text>
                    </DivLink>

                    <InputWithIcon
                        name="email"
                        value={email}
                        type="email"
                        placeholder="Digite seu email"
                        onChange={text => setEmail(text.target.value)}
                        nameIcon="email"
                    />

                    <ButtonForgot
                        disabled={isLoading}
                        onClick={!isLoading ? handleSubmit : null}
                        type="submit"
                    >
                        {isLoading ? 'Loading…' : 'Enviar'}
                    </ButtonForgot>
                </Form>
                <CenterDiv>
                    <DivLink>
                        <Link href="/Login">
                            <Text>Voltar</Text>
                        </Link>
                    </DivLink>
                </CenterDiv>
            </ContainerForm>
        </Container>
    );
}
