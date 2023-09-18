import styled from 'styled-components/native'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"

const CardView = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
`;

const CardText = styled.Text`
`;

export default Videodetail = () => {
    return <CardView>
        <VideoPlayer src="https://rr4---sn-5hne6nsz.googlevideo.com/videoplayback?expire=1695057053&ei=PTAIZcOUH7Gjx_AP8JCYuAQ&ip=178.175.129.35&id=o-ADH5bGr1flLEc0zpi3TBcLaTKZ6wwUjCCbkxsTfaO2yJ&itag=18&source=youtube&requiressl=yes&spc=UWF9fxYyWQ9fM83zfNkJWMXCinragdA&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=2379289&ratebypass=yes&dur=31.872&lmt=1676615611178186&fexp=24007246,24350018&beids=24350018&c=ANDROID&txp=5530434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgSLzO-7gsjlfvKj4MHJX1XtzjwKQRKxgjERIl1enVN0QCIBFuA3Yl9w1vZd5p_-kA9qz8gGsRauXw5INqurDd9l0Y&title=%D0%A2%D0%98%D0%A2%D0%90%D0%9D%D0%98%D0%9A%20%3A%20%D0%9C%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%20%D0%B2%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9%20%D0%B2%D0%BE%D0%B4%D0%B5%20(%D0%9F%D0%90%D0%A0%D0%9E%D0%94%D0%98%D0%AF)%20%F0%9F%A4%A3&rm=sn-pouxga5o-vu2s7l,sn-4g5ek676&req_id=92f13d28930da3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=0a&mip=185.94.165.228&mm=29&mn=sn-5hne6nsz&ms=rdu&mt=1695034024&mv=u&mvi=4&pl=25&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgI1Z-8MKTjO-Ia3t5HaXOHzHw19GZ93G5_Q58oqTL4WwCIGuJLpt09ZDjMu5RlqVexHFO4ICXKWeNwqLLAiNTR1S9" />
    </CardView>
}