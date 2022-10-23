import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    align-items: center;
    
    gap: 15px;    
    margin-bottom: 10px;
    width: 350px;
    padding: 10px 20px;

    border-radius: 5px;
    box-shadow:
        1px 3px 1px rgba(0, 0, 0, 0.1),
        2px 1px 2px rgba(0, 0, 0, 0.08),
        1px 2px 2px rgba(0, 0, 0, 0.12);
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${SetBgColor};    
`;
