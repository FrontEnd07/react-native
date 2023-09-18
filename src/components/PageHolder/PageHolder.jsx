import styled from 'styled-components/native';

const StylePageHolder = styled.View`
    padding-top: 24px;
    padding-bottom: 24px;
    min-height: calc(100vh - 72px);
    flex-wrap: wrap;
    height: 100vh!important;
`;

const Container = styled.View`
    width: 100%;
    padding: 0px 8px;
`;

export default PageHolder = ({ children }) => <StylePageHolder>
    <Container>{children}</Container>
</StylePageHolder>
