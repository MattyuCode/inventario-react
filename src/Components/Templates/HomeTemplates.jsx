import styled from "styled-components";

const HomeTemplates = () => {
  const saludos = "Bievenido en HomeTemplates";
  return (
    <Container>
      <div>
        <h1>{`Mattyu's`}</h1>
        <h2>{saludos}</h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export default HomeTemplates;
