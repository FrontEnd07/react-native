import * as yup from "yup";
import { Button } from "react-native";
import { useForm } from "react-hook-form";
import styled from 'styled-components/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { LField } from "../../components/Form/LField/LField";
import PageHolder from '../../components/PageHolder/PageHolder';

const schema = yup.object().shape({
    login: yup.string().trim().required("Обязательно"),
    pass: yup.string().trim().required("Обязательно"),
});

const Card = styled.View`
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const CardBody = styled.View`
    flex: 1 1 auto;
    padding: 32px;
    color: #fff;
`;

const MarginButton = styled.View`
    margin-bottom: 10px;
`;

export default LoginPage = ({ navigation }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const handlerSubmit = (data) => {
        navigation.navigate("VideoList", data)
    }

    return <PageHolder>
        <Card>
            <CardBody>
                <MarginButton>
                    <LField
                        setValue={setValue}
                        placeholder="Логин"
                        name="login"
                        type="default"
                        register={register}
                        errors={errors} />
                </MarginButton>
                <MarginButton>
                    <LField
                        setValue={setValue}
                        placeholder="Пароль"
                        name="pass"
                        type="default"
                        register={register}
                        errors={errors} />
                </MarginButton>
                <Button title="Отправить" onPress={handleSubmit(handlerSubmit)} />
            </CardBody >
        </Card>
    </PageHolder>
}