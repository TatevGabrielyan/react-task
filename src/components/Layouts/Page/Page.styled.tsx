import styled from 'styled-components';
import { Tabs } from 'antd';

export const PageTemplate = styled('div')`

   margin-left: 70px;
   
   h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        margin-top: 50px;
        margin-bottom: 20px;
   }
`;

export const TabsLayout = styled(Tabs)`
    .ant-tabs-ink-bar {
      background: #ffffff !important;
   }

   ::before {
      bottom: auto!important;
      display: none;
   }

   .ant-tabs-tab-active {
      
      .ant-skeleton-input, .ant-skeleton-paragraph li, .ant-skeleton-avatar, .ant-skeleton-button, div ul li::before {
         background: #BBC8E2 !important;

      }

      div p {
         color: #4764FF;
      }

   }
`

export const ExportComponent = styled('div')`
    box-sizing: border-box;
    gap: 10px;
    height: 52px;
    margin: 100px 70px 198px;
    button {
      width: 200px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #4764FF;
      height: 52px;

    }
`