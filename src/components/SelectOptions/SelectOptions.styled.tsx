import styled, { createGlobalStyle } from 'styled-components';

export const SelectOptions = styled('div')`

    .ant-select {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 454px;
        height: 51px;
        margin: 70px 0 0 70px;

        @media only screen and (max-width:768px ){
          width: 280px;
          margin: 70px 0 0 10px;
        }
        svg {
            fill: #000000;
        }
    }
    .ant-select-focused, .ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customized-input):not(.ant-pagination-size-changer) .ant-select-selector{
        box-shadow: none;
    }

    .ant-select-selector {
        border: 1px solid #DEDEDE !important;
        border-radius: 4px; 
    }

    .ant-select-selection-item {
        font-family: 'Intern', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 1;
    }
`;

export const GlobalStyles = createGlobalStyle`
  .ant-select-dropdown {
    top: 121px !important;
    border-radius: 4px;
    border: 1px solid #DEDEDE
  }
  .ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: transparent;
  }
`;


export const ExportComponent = styled('div')`
    box-sizing: border-box;
    margin-left: 70px;
    gap: 10px;
    height: 52px;
    margin-bottom: 198px;

    button {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #4764FF;
      height: 52px;
      width: 200px;
    }
`