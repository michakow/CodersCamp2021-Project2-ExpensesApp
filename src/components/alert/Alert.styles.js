import styled from 'styled-components';

export const StyledAlert = styled.div`
  min-width: 260px;
  margin-top: 23px;
  margin-bottom: 13px;
  padding: 39px 19px 45px 22px;
  text-align: center;
  border: 3px solid #6a5f5f;
  border-radius: 20px;

  & h2 {
    margin-bottom: 26px;
    font-weight: 600;
    font-size: 36px;
    line-height: 57px;
    color: #6a5f5f;
  }

  & p {
    margin-bottom: 28px;
    font-weight: 600;
    font-size: 26px;
    line-height: 41px;
    color: #f4600c;
  }
`;
