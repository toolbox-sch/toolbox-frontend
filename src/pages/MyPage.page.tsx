// src/pages/MyPage.page.tsx
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import getFile from '../api/getFile';
import getFiles from '../api/getFiles';

interface FileData {
  file_id: number;
  name: string;
  created_at: string;
}

const MyPage = () => {
  const [files, setFiles] = useState<FileData[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await getFiles();
        setFiles(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = async (filename: string) => {
    try {
      const response = await getFile(filename);
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download Error:', error);
    }
  };

  return (
    <Container>
      <TitleContainer>내 이용 기록</TitleContainer>
      <FilesContainer>
        {files.map((file) => (
          <FileItem key={file.file_id}>
            <FileName>{file.name}</FileName>
            <FileDate>{new Date(file.created_at).toLocaleString()}</FileDate>
            <DownloadButton onClick={() => handleDownload(file.name)}>다운로드</DownloadButton>
          </FileItem>
        ))}
      </FilesContainer>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  padding: 2rem;
`;

const TitleContainer = styled.div`
  padding-top: 4rem;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
`;

const FilesContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 60%;
`;

const FileName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const FileDate = styled.div`
  font-size: 14px;
  color: #828282;
  margin-top: 0.5rem;
`;

const DownloadButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 14px;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #828282;
  }
`;
