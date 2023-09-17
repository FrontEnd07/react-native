import styled from "styled-components/native";

const Card = styled.TouchableOpacity`
    padding: 16px 12px;
    background-color: #fff;
    margin-top: 15px;
    flex-direction: row;
`;

const CardImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    margin-right: 20px;
`;

const CardContent = styled.View`
    flex: 1;
`;

const TextName = styled.Text`
    font-size: 16px;
`;

export default VideoCard = ({ name, image, country, navigation }) => <Card onPress={() => navigation.navigate('VideoDetail')}>
    <CardImage source={{ uri: image }} />
    <CardContent>
        <TextName>Country: {country}</TextName>
        <TextName>Name: {name}</TextName>
    </CardContent>
</Card>