import React, { useState, useRef } from 'react';
import { Button, View } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = ({ src }) => {
    const [shouldPlay, setShouldPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMillis, setIsMillis] = useState(false);
    const video = useRef(null);
    const videoUri = src;

    const togglePlayback = () => {
        if (isPlaying) {
            video.current.pauseAsync();
        } else {
            video.current.playAsync();
        }
        setIsPlaying(!isPlaying);
    };

    const onPlaybackStatusUpdate = (status) => {
        if (!status.isPlaying && status.positionMillis == status.durationMillis) {
            setShouldPlay(true);
            setIsMillis(true);
        }
        if (isPlaying !== status.isPlaying) {
            setIsPlaying(!isPlaying);
        }
        if (status.positionMillis == 0 && isMillis) {
            video.current.playAsync();
        }
    };

    const onRetryPress = () => {
        setShouldPlay(false);
        video.current.setPositionAsync(0);
    };

    return <View>
        <Video
            ref={video}
            source={{ uri: videoUri }}
            useNativeControls
            style={{ width: 300, height: 200 }}
            resizeMode="contain"
            shouldPlay={shouldPlay}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />
        {!shouldPlay && <Button title={isPlaying ? 'Пауза' : 'Воспроизвести'} onPress={togglePlayback} />}
        {shouldPlay && <Button title="Повторить" onPress={onRetryPress} />}
    </View>
};

export default VideoPlayer;