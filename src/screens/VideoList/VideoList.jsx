import { useEffect, useState } from "react";
import styled from 'styled-components/native';
import { FlatList, Text, ActivityIndicator, View, RefreshControl } from "react-native";
import { getListApi } from "../../http/VideoList/VideoList";
import VideoCard from "../../components/VideoCard/VideoCard";

const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default VideoList = ({ navigation }) => {
    //obj.route
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const isfetch = () => {
        setIsLoading(true)
        getListApi()
            .then((res) => {
                setData(res)
            }).finally(() => {
                setIsLoading(false)
            });
    }

    useEffect(isfetch, [])

    if (isLoading) return <Loading>
        <ActivityIndicator size={"large"} />
        <Text>Загрузка...</Text>
    </Loading>

    if (data.success !== true) return <Text>{data.message}</Text>

    return <View>
        <FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={isfetch} />}
            data={data.users}
            renderItem={(({ item }) => <VideoCard
                navigation={navigation}
                name={item.first_name}
                image={item.profile_picture}
                country={item.country} />
            )}
        />
    </View>
}