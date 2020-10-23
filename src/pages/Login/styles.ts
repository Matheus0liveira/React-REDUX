import styled from 'styled-components';


export const Form = styled.form`

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #FFF;



  h1{
    font-size: 4rem;
    padding-bottom: 4rem;
  }

`;

export const ContentWrapper = styled.div`

  display:flex;
  justify-content: center;
  flex-direction: column;
  
  width: 20%;
  min-width: 20rem;
  
  font-size: 2.5rem;


  label{
    margin: 2rem 0 1rem 0;
  }

  input{
    /* height: 4rem; */
    font-size: 2.5rem;
    width: 100%;
    border: none;
    padding: 1rem 2rem;
    background: #E1E5F2;
    border-radius: 0.8rem;
    outline: 0;
  }

  button{
    font-size: 1.5rem;
    
    margin-top: 6rem;
    padding: 2rem;

    border: none;
    border-radius: 0.8rem;
    background: #20FC8F;
    color: #363946;
    font-weight: bold;
    
    transition: opacity .2s ease ;
    cursor: pointer;


    &:hover{
      opacity: 0.6;

    }

  }
`;