import * as React from 'react';
import './index.css';
import 'antd/dist/reset.css';
import { FormTable } from './components/FormTable';
import styled from '@emotion/styled';
import { Button } from 'antd';

function App() {
  const [metaData, setMetaData] = React.useState({
    expand: true,
    formValues: {},
  });

  const setMetaData1 = React.useCallback(() => {
    setMetaData({
      expand: false,
      formValues: {
        name: 'TOM',
        age: 20,
      },
    });
  }, []);

  const setMetaData2 = React.useCallback(() => {
    setMetaData({
      expand: true,
      formValues: {
        name: 'SAM',
        age: 10,
      },
    });
  }, []);

  return (
    <Container>
      <h1>등록폼</h1>
      <Border>
        <FormTable
          metaData={metaData}
          onChangeMetaData={(metaData) => {
            console.log('run onChangeMetaData', metaData);
          }}
        />
      </Border>

      <Button size="small" onClick={setMetaData1}>
        metadata1
      </Button>
      <Button size="small" onClick={setMetaData2}>
        metadata2
      </Button>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid red;
  margin: 20px;
  padding: 20px;
`;
const Border = styled.div`
  border: 1px solid blue;
  padding: 20px;
  margin: 20px;
`;


export default App;
