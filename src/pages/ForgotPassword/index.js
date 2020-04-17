import React, { useState } from 'react';
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
import Logo from '../../components/Header';
import { Types as ForgotTypes } from '../../store/ducks/ForgotPassword'; // eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

export default function ForgotPassword({ history }) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('usuario@gmail.com');
    const postEmail = useSelector(state => state.ForgotPassword);

    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (isLoading) {
    //         setLoading(true);
    //     }
    // }, [isLoading]);

    async function handleSubmit(event) {
        event.preventDefault();
        // setLoading(true);
        // if (email === '') {
        //     swal(
        //         'Opah!',
        //         'Parece que você se esqueceu de informar o seu email',
        //         'warning'
        //     );
        //     setLoading(false);
        // } else {
        await dispatch({
            type: ForgotTypes.SET_FORGOTPASSWORD,
            payload: {
                email: email.toLowerCase(),
            },
        });
        // swal(
        //     'Enviado!',
        //     'Enviamos para o email informado a sua nova senha',
        //     'success'
        // );
    }

    return (
        <Container>
            <ContainerForm>
                <Logo />
                <Form>
                    <DivLink>
                        <Text>Email da conta</Text>
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
                        disabled={postEmail.loading}
                        onClick={handleSubmit}
                        type="submit"
                    >
                        {postEmail.loading ? 'Loading…' : 'Entrar'}
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
