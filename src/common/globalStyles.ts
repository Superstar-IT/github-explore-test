import { css } from "styled-components";

export const defaultScrollBar = css`
  scrollbar-color: var(--bg-scrollbar-default) transparent;
  scrollbar-width: thin;
  scrollbar-gutter: stable both-edges;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--bg-scrollbar-default);
    border-radius: 100px;
    border: unset;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--bg-scrollbar-default);
  }
`;
