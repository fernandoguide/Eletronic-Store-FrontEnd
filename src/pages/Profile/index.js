import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../../components/NavBar';
import InputWithIcon from '../../components/InputWithIcon';
import avatar from '../../assets/images/defaultAvatar.png';
import api from '../../services/api';
import {
    Container,
    AsideNav,
    SectionPerfil,
    NewAvatar,
    ButtonProfile,
    Form,
} from './styles';

// eslint-disable-next-line
export default function Order({ history }) {
    const dispatch = useDispatch();

    const [userAcount, setUserAcount] = useState();
    const [thumbnail, setThumbnail] = useState(null);
    const [user, setUser] = useState('João Vinicius');
    const [email, setEmail] = useState('joaov1@gmail.com');
    const [password1, setPassword1] = useState('123');
    const [password2, setPassword2] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');

    const previw = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : avatar;
    }, [thumbnail]);

    async function handleUpload(event) {
        event.preventDefault();
        const authorization = localStorage.getItem('token');
        const data = new FormData();
        data.append('file', thumbnail);

        const response = await api.post('/clientes/picture', data);
        console.log(response);
    }

    useEffect(() => {
        async function getDataUser() {
            const du = await localStorage.getItem('dataUser');
            const dataUser = JSON.parse(du);
            setUserAcount(dataUser);
        }
        getDataUser();
        // eslint-disable-next-line
    }, [userAcount]);

    const du = localStorage.getItem('dataUser');
    const dataUser = JSON.parse(du);

    return (
        <>
            <Nav />
            {/* <Cart> */}
            <Container>
                <AsideNav>
                    <label id="tumbnail">
                        <NewAvatar
                            background={previw}
                            alt="Selecione uma imagem"
                        >
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                onChange={event =>
                                    setThumbnail(event.target.files[0])
                                }
                            />
                        </NewAvatar>
                    </label>
                    <ButtonProfile type="submit" onClick={handleUpload}>
                        Salvar Foto
                    </ButtonProfile>
                </AsideNav>
                <SectionPerfil>
                    <Form>
                        <InputWithIcon
                            name="email"
                            value={email}
                            type="email"
                            autocomplete="off"
                            placeholder="Digite seu email"
                            onChange={text => setEmail(text.target.value)}
                            nameIcon="email"
                        />
                        <InputWithIcon
                            name="user"
                            value={user}
                            type="text"
                            autocomplete="off"
                            placeholder="Digite seu nome"
                            onChange={text => setUser(text.target.value)}
                            nameIcon="person"
                        />
                        <InputWithIcon
                            name="cpf"
                            value={cpf}
                            type="number"
                            autocomplete="off"
                            placeholder="Seu CPF"
                            onChange={text => setCpf(text.target.value)}
                            nameIcon="credit_card"
                        />
                        <InputWithIcon
                            name="telefone"
                            value={telefone}
                            type="number"
                            autocomplete="off"
                            placeholder="Seu número de telefone"
                            onChange={text => setTelefone(text.target.value)}
                            nameIcon="phone"
                        />

                        <InputWithIcon
                            name="password"
                            value={password1}
                            type="password"
                            autocomplete="off"
                            placeholder="Sua senha secreta"
                            onChange={text => setPassword1(text.target.value)}
                            nameIcon="lock"
                        />
                        <InputWithIcon
                            name="password2"
                            value={password2}
                            type="password"
                            autocomplete="off"
                            placeholder="Confirme sua senha secreta"
                            onChange={text => setPassword2(text.target.value)}
                            nameIcon="lock"
                        />

                        <InputWithIcon
                            name="cep"
                            value={cep}
                            type="text"
                            autocomplete="off"
                            placeholder="Digite o CEP"
                            onChange={text => setCep(text.target.value)}
                            nameIcon="map"
                        />

                        <InputWithIcon
                            name="bairro"
                            value={bairro}
                            type="text"
                            autocomplete="off"
                            placeholder="Bairro"
                            onChange={text => setBairro(text.target.value)}
                            nameIcon="person_pin_circle"
                        />
                        <InputWithIcon
                            name="logradouro"
                            value={logradouro}
                            type="text"
                            autocomplete="off"
                            placeholder="Logradouro"
                            onChange={text => setLogradouro(text.target.value)}
                            nameIcon="home"
                        />
                        <InputWithIcon
                            name="numero"
                            value={numero}
                            type="text"
                            autocomplete="off"
                            placeholder="Número da Casa"
                            onChange={text => setNumero(text.target.value)}
                            nameIcon="person_pin_circle"
                        />
                    </Form>
                </SectionPerfil>
            </Container>
            {/* </Cart> */}
        </>
    );
}
