import styled from 'styled-components';
import { Card, Col, Row } from 'antd';

// single grid 

export const CardComponent = styled(Card)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 612px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-top: 105px;
    border: none;

    > .ant-row {
        margin-top: 8px;
    }

    .ant-card-body {
        padding: 0;
    }

    @media only screen and (max-width:768px ){
        width: 280px;
        margin: 20px 0 0 10px;
      }

`;

export const IconCol = styled(Col)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    img {
        width: 23.75px;
        height: 23.75px;
    }
`

export const CategoryName = styled('p')`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: #000000;
    margin: 0;
    padding-bottom: 8px;
`

export const CategoryTitle = styled('p')`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    letter-spacing: 0.5px;
    color: #000000;
    margin: 0;
    padding-bottom: 16px;
`

export const ShareRow = styled(Row)`
    justify-content: space-between;
    padding-bottom: 16px;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.15px;
        color: #000000;
        margin: 0;
    }
`

export const DataRow = styled(Row)`
    align-items: center;

    .ant-col{
        margin-right: 10px;
    }
`

export const ImageCol = styled(Col)`
    height: 24px;
`
export const CardImage = styled('img')`
    width: 612px;
    height: 290px;
    border-radius: 24px;
    object-fit: cover;

    @media only screen and (max-width:768px ){
        width: 200px;
       
      }
`

export const Description = styled('p')`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: justify;
    letter-spacing: 0.5px;
    color: #000000;
    margin: 0;
    padding: 16px 0 40px ;

    @media only screen and (max-width:768px ){
        width: 200px;
        font-size: 14px;
      }
`

export const ShareText = styled('span')`
    width: 45px;
    height: 22px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: #000000;
`

// Two Image grid 

export const TwoGridComponent = styled(Card)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 653px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-top: 105px;
    border: none;

    @media only screen and (max-width: 768px ){
        width: 200px;
      }


    > .ant-row {
        margin-top: 8px;
    }

    .ant-card-body {
        padding: 0;
    }


`;

export const TwoGridImage = styled('img')`
    width: 653px;
    height: 290px;
    border-radius: 24px;
    object-fit: cover;

    @media only screen and (max-width:768px){
        width: 200px;
    }
`

export const RowContainer = styled(Row)`
    max-width: 653px;
    margin-top: 40px;

    @media only screen and (max-width:768px ){
        width: 280px;
        max-width: 280px;
        margin: 20px 0 0 10px;
    }
`

export const TwoGridTitle = styled('p')`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: #000000;
    margin: 0;
`

export const TwoGridDesc = styled('p')`
    margin: 0;
    width: 460px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: justify;
    letter-spacing: 0.5px;
    color: #000000;
    padding: 16px 0 20px;

    @media only screen and (max-width:768px ){
        width: 200px;
    }
`

export const SecondGridImage = styled('img')`
    width: 467px;
    height: 290px;
    border-radius: 24px;

    @media only screen and (max-width:768px ){
        width: 200px;
    }
`

// Slider grid

export const StyledSlide = styled.div`
  flex: 0 0 auto;
  margin-right: 10px; /* Adjust as needed */
`;
export const ThumbnailImageCol = styled(Col)`
    width: 466px !important;
    min-height: 620px !important;


    @media (max-width: 1024px) {
        .image-gallery-slide-wrapper {
          width: 100%;
        }
        .image-gallery-thumbnails-wrapper {
          display: none;
        }
    }

    @media only screen and (max-width:768px ){
        width: 200px !important;

        .image-gallery-slide-wrapper {
            width: 90%;
          }
          .image-gallery-thumbnail {
            width: 50px;
            height: 50px;
          }
    }

    .image-gallery-slide img {
        width: 466px;
        min-height: 620px;
        object-fit: cover; 
        border-radius: 24px;

        @media only screen and (max-width:768px ){
            width: 200px;
        }
    }
    .image-gallery-thumbnail-image {
        border-radius: 24px;
        cursor: pointer;
    }
    .image-gallery-thumbnail.active, .image-gallery-thumbnail:focus {
        outline: none;
        border: none;
    }
    .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail {
        margin-top: 45px;
    }
}
`

export const SliderGridComponent = styled(Card)`
    margin-top: 105px;
    border:none;
`;


export const DataCol = styled(Col)`
    max-width: 512px;

    @media only screen and (max-width:768px ){
        width: 200px;
    }
`

export const ButtonFirst = styled('button')`
    width: 202px;
    height: 48px;
    box-sizing: border-box;
    background: #000000;
    border: 1px solid #000000;
    border-radius: 50px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #FFFFFF;
    
`;

export const ButtonSecond = styled('button')`
    width: 202px;
    height: 48px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #000000;
    border-radius: 50px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #000000;
    
`

export const SliderDescription = styled('p')`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: justify;
    letter-spacing: 0.5px;
    color: #000000;
    margin: 0;
    padding: 0 0 26px ;
`

export const SliderUl = styled('ul')`
    
    margin-block-start: 31px;
    margin-block-end: 0;
    padding-inline-start: 20px;

    li {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.5px;
        color: #000000;
        list-style-type: none;


        &::before {
            content: '';
            width: 12px;
            height: 12px;
            border-radius: 53px;
            position: absolute;
            left: 0;
            background: #000000;
            margin-top: 11px;
        }
    }
`