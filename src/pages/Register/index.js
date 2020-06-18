import React, { useState, useEffect } from 'react';
import { Ellipsis } from 'react-spinners-css';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { darken } from 'polished';
import {
    Container,
    ContainerForm,
    Form,
    ButtonLogin,
    // ButtonBackPage,
    CenterDiv,
    // DivLink,
} from './styles';
import Nav from '../../components/NavBar';
import InputWithIcon from '../../components/InputWithIcon';
import { Types as CepTypes } from '../../store/ducks/Cep';
import { Types as RegisterTypes } from '../../store/ducks/Register';
import { colors } from '../../styles';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    stepper: {
        backgroundColor: 'transparent',
    },

    stepIcon: {
        // color: 'pink',
        '&$active': {
            color: '#7159c1',
        },
        '&$completed': {
            color: '#04D361',
        },
    },
    text: {
        color: '#aaab',
        '&$active': {
            color: '#eee',
        },
        '&$completed': {
            color: '#aaab',
        },
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    active: {},
    completed: {},
}));

const style = {
    background: '#7159c1',
    borderRadius: 6,
    border: 0,
    color: 'white',
    height: 50,
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold',
    maxWidth: '400px',
    padding: '0 30px',
    margin: '10px 0px auto',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: `${darken(0.05, colors.primary)}`,
    },
};
const styleBackButton = {
    background: '#191920',
    borderRadius: 6,
    border: 0,
    color: '#ccc',
    height: 50,
    fontSize: '16px',
    width: '100%',
    maxWidth: '400px',
    fontWeight: 'bold',
    padding: '0 30px',
    margin: '10px 0px auto',
    textTransform: 'capitalize',
};

function getSteps() {
    return ['Dados Pessoais', 'Senha', 'Endereço'];
}

// eslint-disable-next-line
export default function Register({ history }) {
    const dispatch = useDispatch();
    const registerData = useSelector(state => state.Register);
    const cepData = useSelector(state => state.Cep);

    const [user, setUser] = React.useState('João Vinícius');
    const [email, setEmail] = React.useState('long.joferrary@gmail.com');
    const [password1, setPassword1] = React.useState('123');
    const [password2, setPassword2] = React.useState('123');
    const [cpf, setCpf] = React.useState('50874841828');
    const [telefone, setTelefone] = React.useState('969705433');
    const [cep, setCep] = useState('05176030');
    const [logradouro, setLogradouro] = React.useState('Av. Myrim');
    const [numero, setNumero] = React.useState('137');
    const [bairro, setBairro] = React.useState('Vila Clarice');

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    async function handleSubmit(event) {
        event.preventDefault();

        await dispatch({
            type: RegisterTypes.SET_REGISTER,
            payload: {
                nome: user,
                email: email.toLowerCase(),
                senha: password1,
                senha2: password2,
                telefone: telefone.trim(),
                cep: cep.trim(),
                cpf: cpf.trim(),
                logradouro: !logradouro ? cepData.data.logradouro : logradouro,
                numero: numero.trim(),
                bairro: !bairro ? cepData.data.bairro : bairro,
            },
        });
    }
    async function handleCep() {
        await dispatch({
            type: CepTypes.GET_CEP,
            payload: {
                cep: cep.trim(),
            },
        });
    }

    useEffect(() => {
        if (registerData.valid === true) {
            // eslint-disable-next-line
            history.push('/login');
        }
    }, [registerData]);

    // function backPage() {
    //     window.history.back();
    // }

    return (
        <Container>
            <Nav />
            <ContainerForm>
                <div className={classes.root}>
                    <Stepper
                        className={classes.stepper}
                        activeStep={activeStep}
                        alternativeLabel
                    >
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel
                                    StepIconProps={{
                                        classes: {
                                            root: classes.stepIcon,
                                            active: classes.active,
                                            completed: classes.completed,
                                        },
                                    }}
                                    classes={{
                                        label: classes.text,
                                        active: classes.active,
                                        completed: classes.completed,
                                    }}
                                >
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <CenterDiv
                                    style={{
                                        width: '100%',
                                        height: '100px',
                                        marginTop: '50px',
                                    }}
                                >
                                    <span
                                        style={{
                                            color: '#FFF',
                                            margin: '0 auto',
                                        }}
                                    >
                                        Todos os passos concluidos
                                    </span>
                                </CenterDiv>
                                <CenterDiv>
                                    <ButtonLogin
                                        onClick={handleSubmit}
                                        disabled={registerData.loaging}
                                        type="submit"
                                    >
                                        {registerData.loaging ? (
                                            <Ellipsis
                                                color="#be97e8"
                                                size={50}
                                            />
                                        ) : (
                                            'Registrar'
                                        )}
                                    </ButtonLogin>
                                    <Button
                                        style={styleBackButton}
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={
                                            (classes.backButton, classes.text)
                                        }
                                    >
                                        Back
                                    </Button>
                                </CenterDiv>
                            </div>
                        ) : (
                            <div>
                                {(() => {
                                    switch (activeStep) {
                                        case 0:
                                            return (
                                                <Form>
                                                    <InputWithIcon
                                                        name="email"
                                                        value={email}
                                                        type="email"
                                                        autocomplete="off"
                                                        placeholder="Digite seu email"
                                                        onChange={text =>
                                                            setEmail(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="email"
                                                    />
                                                    <InputWithIcon
                                                        name="user"
                                                        value={user}
                                                        type="text"
                                                        autocomplete="off"
                                                        placeholder="Digite seu nome"
                                                        onChange={text =>
                                                            setUser(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="person"
                                                    />
                                                    <InputWithIcon
                                                        name="cpf"
                                                        value={cpf}
                                                        type="number"
                                                        autocomplete="off"
                                                        placeholder="Seu CPF"
                                                        onChange={text =>
                                                            setCpf(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="credit_card"
                                                    />
                                                    <InputWithIcon
                                                        name="telefone"
                                                        value={telefone}
                                                        type="number"
                                                        autocomplete="off"
                                                        placeholder="Seu número de telefone"
                                                        onChange={text =>
                                                            setTelefone(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="phone"
                                                    />
                                                </Form>
                                            );
                                        case 1:
                                            return (
                                                <Form>
                                                    <InputWithIcon
                                                        name="password"
                                                        value={password1}
                                                        type="password"
                                                        autocomplete="off"
                                                        placeholder="Sua senha secreta"
                                                        onChange={text =>
                                                            setPassword1(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="lock"
                                                    />
                                                    <InputWithIcon
                                                        name="password2"
                                                        value={password2}
                                                        type="password"
                                                        autocomplete="off"
                                                        placeholder="Confirme sua senha secreta"
                                                        onChange={text =>
                                                            setPassword2(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="lock"
                                                    />
                                                </Form>
                                            );
                                        case 2:
                                            return (
                                                <Form>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent:
                                                                'space-between',
                                                        }}
                                                    >
                                                        <InputWithIcon
                                                            name="cep"
                                                            value={cep}
                                                            type="text"
                                                            autocomplete="off"
                                                            placeholder="Digite o CEP"
                                                            onChange={text =>
                                                                setCep(
                                                                    text.target
                                                                        .value
                                                                )
                                                            }
                                                            nameIcon="map"
                                                        />
                                                        <ButtonLogin
                                                            style={{
                                                                maxWidth:
                                                                    '150px',
                                                            }}
                                                            disabled={
                                                                cepData.loading
                                                            }
                                                            type="submit"
                                                            onClick={() => {
                                                                handleCep();
                                                            }}
                                                        >
                                                            {cepData.loaging ? (
                                                                <Ellipsis
                                                                    color="#be97e8"
                                                                    size={50}
                                                                />
                                                            ) : (
                                                                'Buscar CEP'
                                                            )}
                                                        </ButtonLogin>
                                                    </div>
                                                    <InputWithIcon
                                                        name="bairro"
                                                        value={bairro}
                                                        type="text"
                                                        autocomplete="off"
                                                        placeholder="Bairro"
                                                        onChange={text =>
                                                            setBairro(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="person_pin_circle"
                                                    />
                                                    <InputWithIcon
                                                        name="logradouro"
                                                        value={logradouro}
                                                        type="text"
                                                        autocomplete="off"
                                                        placeholder="Logradouro"
                                                        onChange={text =>
                                                            setLogradouro(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="home"
                                                    />
                                                    <InputWithIcon
                                                        name="numero"
                                                        value={numero}
                                                        type="text"
                                                        autocomplete="off"
                                                        placeholder="Número da Casa"
                                                        onChange={text =>
                                                            setNumero(
                                                                text.target
                                                                    .value
                                                            )
                                                        }
                                                        nameIcon="person_pin_circle"
                                                    />
                                                </Form>
                                            );
                                        default:
                                            return (
                                                <CenterDiv>
                                                    <span>
                                                        Todos os passos
                                                        concluidos
                                                    </span>
                                                </CenterDiv>
                                            );
                                    }
                                })()}

                                {/* <Typography
                                        className={classes.instructions}
                                    >
                                        {getStepContent(activeStep)}
                                    </Typography> */}
                                <div>
                                    <CenterDiv>
                                        <Button
                                            disableRipple
                                            variant="contained"
                                            style={style}
                                            onClick={handleNext}
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Finalizar'
                                                : 'Proximo'}
                                        </Button>
                                        <Button
                                            disableRipple
                                            style={styleBackButton}
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={
                                                (classes.backButton,
                                                classes.text)
                                            }
                                        >
                                            Back
                                        </Button>
                                    </CenterDiv>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* <InputWithIcon
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
                        name="password"
                        value={password1}
                        type="password"
                        autocomplete="off"
                        placeholder="Sua senha secreta"
                        onChange={text => setPassword1(text.target.value)}
                        nameIcon="lock"
                    />
                    <InputWithIcon
                        name="password"
                        value={password2}
                        type="password"
                        autocomplete="off"
                        placeholder="Confirme sua senha secreta"
                        onChange={text => setPassword2(text.target.value)}
                        nameIcon="lock"
                    />
                    <DivLink />
                    <ButtonLogin
                        disabled={registerData.loaging}
                        onClick={handleSubmit}
                        type="submit"
                    >
                        {registerData.loaging ? (
                            <Ellipsis color="#be97e8" size={50} />
                        ) : (
                            'Registrar'
                        )}
                    </ButtonLogin> */}
                {/* </Form> */}
                {/* <CenterDiv>
                    <DivLink>
                        <ButtonBackPage onClick={backPage}>
                            Voltar
                        </ButtonBackPage>
                    </DivLink>
                </CenterDiv> */}
            </ContainerForm>
        </Container>
    );
}
