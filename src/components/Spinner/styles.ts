import styled from "styled-components";

const Span = styled.span`
  @keyframes spinner-line-fade-more {
    0%,
    100% {
      opacity: 0; /* minimum opacity */
    }
    1% {
      opacity: 1;
    }
  }

  @keyframes spinner-line-fade-quick {
    0%,
    39%,
    100% {
      opacity: 0.25; /* minimum opacity */
    }
    40% {
      opacity: 1;
    }
  }

  @keyframes spinner-line-fade-default {
    0%,
    100% {
      opacity: 0.22; /* minimum opacity */
    }
    1% {
      opacity: 1;
    }
  }

  @keyframes spinner-line-shrink {
    0%,
    25%,
    100% {
      /* minimum scale and opacity */
      transform: scale(0.5);
      opacity: 0.25;
    }
    26% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default Span;
