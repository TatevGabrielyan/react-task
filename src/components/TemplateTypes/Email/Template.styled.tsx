import styled from 'styled-components';
import { Card, Row, Col, Skeleton } from 'antd';


export const CardComponent = styled(Card)`
    width: 330px;
    max-width: 330px;
    height: 260px;
    border: 1px solid #DEDEDE;

    .ant-skeleton.ant-skeleton-element .ant-skeleton-image{
        width: 58px ;
        height: 58px;
        border-radius: 50%;
        background: #F8F8F8;
        svg {
            width: 16px;
            height: 16px;
        }
    }

    > .ant-row {
        margin-top: 8px;
    }

    .ant-card-body {
        padding: 0;
        margin-top: 60px;
    }

`;


export const CenterCardComponent = styled(Card)`
    width: 330px;
    max-width: 330px;
    height: 260px;
    border: 1px solid #DEDEDE;

    .ant-skeleton.ant-skeleton-element .ant-skeleton-image{
        width: 58px ;
        height: 58px;
        border-radius: 50%;
        background: #F8F8F8;
        svg {
            width: 16px;
            height: 16px;
        }
    }

    > .ant-row {
        margin-top: 8px;
    }

    .ant-card-body {
        padding: 0;
        margin-top: 9px;
    }

`;

export const RowIcons = styled(Row)`
    margin-top: 8px;
    
    .ant-col {
        max-width: 68px;
    }
    .ant-skeleton.ant-skeleton-element .ant-skeleton-avatar {
        background: #BABABA;
    }
`

export const ColumnContainer = styled(Col)`
    padding: 0 !important;
    text-align: center;
    .ant-card-body {
        padding: 0;
        
        .ant-row {
            justify-content: center;
            padding: 60px 60px 97px;
        }
    }
`

export const TextContainer = styled(Col)`
    max-width: 122px;
    padding: 0 !important;
    margin-left: 20px;

    .ant-skeleton-title {
        display: none;
    }

`
export const CenterTextContainer = styled(Col)`
    max-width: 122px;
    padding: 0 !important;
    
    .ant-skeleton-title {
        display: none;
    }

    .ant-row {
        justify-content: center;
    }

`

export const RightTextContainer = styled(Col)`
    max-width: 122px;
    padding: 0 !important;
    margin-right: 20px;

    .ant-skeleton-title {
        display: none;
    }

`

export const SkeletonCol = styled(Col)`
    height: 17px;
    .ant-skeleton-element .ant-skeleton-input {
        height: 16px;
        width: 122px;
        min-width: 122px;
        background: #BABABA;

    }
`

export const SmallSkeletonCol = styled(Col)`
    height: 17px;
    .ant-skeleton.ant-skeleton-element .ant-skeleton-input {

        height: 16px;
        width: 61px;
        min-width: 61px;
        background: #BABABA;

    }
`

export const SkeletonContainer = styled(Skeleton)`
   

    .ant-skeleton-content .ant-skeleton-title +.ant-skeleton-paragraph {
        margin-block-start: 16px;

        li {
            height: 10px;
            margin-block-start: 4px;
            background: #BABABA;

        }

    }
`

export const LayoutTitle = styled('div')`

    position: absolute;
    bottom: 9px;
    left: 50%;
    -ms-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);

`
export const LeftLayoutTitle = styled('p')`
    margin: 0 auto;
    width: 112px;
    height: 17px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
    color: #808080;
`
export const CenterLayoutTitle = styled('p')`
    margin: 0 auto;
    width: 131px;
    height: 17px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
    color: #808080;
`

export const RowContainer = styled(Row)`
    margin: 0!important ;
    justify-content: center;
`
