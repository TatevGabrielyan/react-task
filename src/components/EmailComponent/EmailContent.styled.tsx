import styled from 'styled-components';
import { Row, Col } from 'antd';

export const ImageContainer = styled('img')`
    width: 160px;
    height: 160px;
    border-radius: 220px;
`

export const LeftRowContainer = styled(Row)`
    max-width: 688px;
    margin: 105px 0 100px;

    .ant-row {
        justify-content: center;
    }

    @media only screen and (max-width:768px ){
        width: 280px;
        margin: 20px 0 0 10px;
      }
`

export const CenterRowContainer = styled(Row)`
    max-width: 688px;
    margin: 105px 0 100px;
    text-align: center;

    @media only screen and (max-width:768px ){
        width: 280px;
        margin: 20px 0 0 10px;
      }
`

export const IconRow = styled(Row)`
    margin-top: 14px;
`

export const CenterIconRow = styled(Row)`
    margin-top: 14px;
    row-gap: 10px;
    width: 100%;
    justify-content: center;

`

export const InfoCol = styled(Col)`
    padding: 0 !important;

    .ant-col {
        padding: 0 !important;
    }
`

export const XIcon = styled('img')`
    margin-top: 5px;
`
export const SocialIcons = styled(Col)`
    margin-right: 10px;
    padding: 0 !important;
`

export const IconCol = styled(Col)`
    width: 30px;
    height: 30px;

    img {
        width: 23.75px;
        height: 23.75px;
    }
`

export const Name = styled('p')`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-top: 0;
    margin-bottom: 10px;
`

export const Title = styled('p')`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin: 0;
`

export const Description = styled('p')`
    width: 508px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: justify;
    color: #000000;

    @media only screen and (max-width:768px ){
        width: 280px;
        font-size: 14px;
      }
`

export const DataCol = styled(Col)`
    padding-left: 20px !important;
`

export const RightDataCol = styled(Col)`
    padding-right: 20px !important;
    padding-left: 0 !important;
`

export const AvatarCol = styled(Col)`
    text-align: center;
`

export const CenterRow = styled(Row)`
    justify-content: center;
`