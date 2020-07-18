import styled from "styled-components";

const Modal = styled.div`
  width: 96rem;
  height: 80rem;

  background: #f3eeee;
  opacity: 1;

  padding: 0 2.6rem;

  border-radius: 15px;

  h1 {
    color: #00a8ff;
    font-weight: 400;
    font-size: 2.5rem;
    padding-bottom: 1.1rem;
    border-bottom: 2px solid #00a8ff;
    margin-bottom: 1.8rem;
  }

  section.assessment-details {
    display: flex;

    img {
      width: 8rem;
      height: 6rem;
    }

    div.details {
      display: flex;
      flex-direction: column;

      padding: 0.3rem 0;
      margin-left: 1rem;

      p {
        margin: 0;
        font-size: 1.3rem;
      }

      p.title {
        margin-bottom: 0.3rem;
        font-size: 2.4rem;
      }
    }
  }
`;

export default Modal;
