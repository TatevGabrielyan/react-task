import styled from 'styled-components';
import { Card, Row, Col, Skeleton } from 'antd';


export const CardComponent = styled(Card)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 330px;
    height: 324px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #DEDEDE;

    .ant-skeleton.ant-skeleton-element .ant-skeleton-image{
        width: 122px;
        height: 64px;
        background: #F8F8F8;
        border-radius: 4px;
        svg {
            width: 20px;
            height: 20px;
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

export const SliderComponent = styled(Card)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 330px;
    height: 324px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #DEDEDE;

    .ant-skeleton.ant-skeleton-element .ant-skeleton-image{
        width: 28px;
        height: 28px;
        background: #F8F8F8;
        border-radius: 4px;
        svg {
            width: 14px;
            height: 14px;
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

export const MainSliderImage = styled(Col)`
    .ant-skeleton.ant-skeleton-element .ant-skeleton-image{
        width: 137px;
        height: 153px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`
export const CenterCardComponent = styled(Card)`
    width: 330px;
    max-width: 330px;
    height: 324px;
    border: 1px solid #DEDEDE;

    .ant-skeleton.ant-skeleton-element .ant-skeleton-image{
        width: 222px;
        height: 82px;
        background: #F8F8F8;
        border-radius: 4px;
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


export const TwoImageContainer = styled(Col)`
    max-width: 222px;
    padding: 0 !important;

    .ant-skeleton-title {
        display: none;
    }

    .ant-skeleton.ant-skeleton-element .ant-skeleton-button {

        width: 35px;  
        min-width: 35px;
        height: 18px;
        background: #BABABA;
        border-radius: 3px;

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
        margin-block-start: 10px;
        margin-block-end: 10px;

        li {
            height: 10px;
            margin-block-start: 4px;
            background: #BABABA;
            border-radius: 3px!important;
        }

    }
`

export const SkeletonContainerSecond = styled(Skeleton)`
   
    .ant-skeleton-content .ant-skeleton-title +.ant-skeleton-paragraph {
        margin-block-start: 7px;
        margin-block-end: 7px;

        li {
            height: 10px;
            margin-block-start: 4px;
            background: #BABABA;
            border-radius: 3px!important;
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
    padding-top: 10px;
`

export const RowContainerSlider = styled(Row)`
    margin: 0!important ;
    justify-content: center;
`






export const SharingOptions = styled(Row)`
    justify-content:  space-between;
    margin-top: 10px;

    .ant-skeleton.ant-skeleton-element .ant-skeleton-input {
        display: inline-block;
        vertical-align: top;
        background: #BABABA;
        border-radius: 3px;
        width: 35px;
        min-width: 35px;
        height: 6px;
        line-height: 32px;
    }
`

export const SharingOptionsSecond = styled(Row)`
    justify-content:  space-between;
    margin-top: 7px;

    .ant-col{
        max-height:6px;
    }

    .ant-skeleton.ant-skeleton-element .ant-skeleton-input {
        display: inline-block;
        vertical-align: top;
        background: #BABABA;
        border-radius: 4px;
        width: 35px;
        min-width: 35px;
        height: 6px;
        line-height: 32px;
    }
`


export const SkeletonImage = styled('div')`
    text-align: center;
`

export const SecondImage = styled(Skeleton.Input)`
    background: #BABABA !important;
    border-radius: 4px !important;
    width: 61px !important;
    min-width: 61px !important;
    height: 16px !important ;
` 

export const ImageBlock = styled('div')`

    .ant-skeleton.ant-skeleton-element .ant-skeleton-image {
        width: 122px;
        height: 42px;
        background: #F8F8F8;
        border-radius: 4px;
    }
`

export const BulletPointListWrapper = styled('div')`
    margin-top: 10px;
    ul {
        padding-left: 10px;
        margin: 0;

        .ant-skeleton .ant-skeleton-content .ant-skeleton-title +.ant-skeleton-paragraph {
            margin-block-start: 0px;

            li {
                list-style-type: none;
                height: 10px;
                background: #BABABA;
                border-radius: 3px!important;
            }
            
        }
    }
`;

export const BulletPointListItem = styled('li')`
  list-style-type: none;
  width: 110px;
  margin-bottom: 4px;


  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 53px;
    position: absolute;
    left: 0px;
    background: #BABABA;
  }
`;

export const Slider = styled(Row)`
    justify-content: space-around;
`

export const ButtonRow = styled(Row)`
    height: 18px;
`