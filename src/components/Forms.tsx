import styled from '@emotion/styled';
import { Switch } from 'antd';
import * as React from 'react';
import { useMetaData } from './FormTable';

import { SubForms } from './SubForms';

export function Forms() {
  const expand = useMetaData((s) => s.expand);
  const setExpand = useMetaData((s) => s.setExpand);

  return (
    <div>
      <Switch checked={expand} onChange={(v) => setExpand(v)} />
      <Border>
        <SubForms />
      </Border>
    </div>
  );
}

const Border = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin: 20px;
`;
