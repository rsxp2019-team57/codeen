import styled from 'styled-components/native';

export const Container = styled.View`
    height: 150px;
    width: 100%;
    background: transparent;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 30px 20px;
`;

export const Title = styled.Text`
    font-family: sans-serif;
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
`;

export const Avatar = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 40px;

    border-width: 3px;
    border-color: #FFF;
    background: #FFF;
`;