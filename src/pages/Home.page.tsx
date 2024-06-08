import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <TitleContainer>PDF와 이미지 변환의 모든 것, 툴박스</TitleContainer>
      <SubTitleContainer>PDF 합치기, 추출하기, 암호화, 텍스트 추출 및 이미지 파일 변환</SubTitleContainer>
      <ToolsContainer>
        <ToolsItem onClick={() => navigate('/merge')}>
          <ToolsItemTitle>PDF 합치기</ToolsItemTitle>
          <ToolsItemExplain>여러 PDF 파일을 하나로 합쳐보세요.</ToolsItemExplain>
        </ToolsItem>
        <ToolsItem onClick={() => navigate('/split')}>
          <ToolsItemTitle>PDF 추출하기</ToolsItemTitle>
          <ToolsItemExplain>하나의 PDF 파일 중 원하는 부분만 잘라보세요.</ToolsItemExplain>
        </ToolsItem>
        <ToolsItem onClick={() => navigate('/encrypt')}>
          <ToolsItemTitle>PDF 암호화</ToolsItemTitle>
          <ToolsItemExplain>PDF 파일을 암호화하여 보안을 강화하세요.</ToolsItemExplain>
        </ToolsItem>
        <ToolsItem onClick={() => navigate('/extract')}>
          <ToolsItemTitle>PDF 텍스트 추출</ToolsItemTitle>
          <ToolsItemExplain>PDF 파일의 텍스트를 추출하여 편리하게 사용하세요.</ToolsItemExplain>
        </ToolsItem>
        <ToolsItem onClick={() => navigate('/pdf_to_png')}>
          <ToolsItemTitle>PDF TO PNG</ToolsItemTitle>
          <ToolsItemExplain>PDF 파일을 PNG 이미지로 변환하세요.</ToolsItemExplain>
        </ToolsItem>
        <ToolsItem onClick={() => navigate('/convert_image')}>
          <ToolsItemTitle>이미지 변환</ToolsItemTitle>
          <ToolsItemExplain>이미지 파일을 다양한 형식으로 변환하세요.</ToolsItemExplain>
        </ToolsItem>
      </ToolsContainer>
    </>
  );
};

export default Home;

const TitleContainer = styled.div`
  padding-top: 4rem;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
`;

const SubTitleContainer = styled.div`
  padding-top: 1rem;
  font-size: 20px;
  font-weight: 400;
  color: #828282;
  text-align: center;
`;

const ToolsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  padding-top: 1rem;
  flex-wrap: wrap;
`;

const ToolsItem = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(25% - 4px);
  margin: 4px;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const ToolsItemTitle = styled.div`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const ToolsItemExplain = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #787878;
  text-align: center;
`;
