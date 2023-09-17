import styled from 'styled-components/native'
import Video from 'react-native-video';

const CardView = styled.View`
    margin-top: 15px;
`;

const CardText = styled.Text`
`;

export default Videodetail = () => {
    return <CardView>
        <Video source={{ uri: "https://vjs.zencdn.net/v/oceans.mp4" }} />
    </CardView>
}