import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;    
    margin-bottom: 10px;
`;

export const Name = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const SetBgColor = props => {
    if (props.online === true)
        return '#0f0';
    else 
        return '#f00';    
}

export const Status = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${SetBgColor};
    
`;
