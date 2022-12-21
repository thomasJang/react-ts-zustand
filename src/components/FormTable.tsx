import * as React from 'react';
import styled from "@emotion/styled";
import {Button} from 'antd';
import create from 'zustand';
import {Forms} from './Forms';

interface MetaData {
  expand: boolean;
  formValues: Record<string, any>;
  onChangeMetaData?: (metaData: MetaData) => void;
}

interface MetaDataAction {
  setExpand: (expand: boolean) => void;
  setFormValues: (formValues: Record<string, any>) => void;
  save: () => void;
  setOnChangeMetaData: (
    onChangeMetaData: MetaData['onChangeMetaData']
  ) => void;
}

interface Props {
  metaData: MetaData;
  onChangeMetaData: (metaData: MetaData) => void;
}

export const useMetaData = create<MetaData & MetaDataAction>((set, get) => ({
  expand: false,
  formValues: {},
  setExpand: (expand) => {
    console.log('change expand', expand);
    set({ expand });
    get().onChangeMetaData?.({
      formValues: get().formValues,
      expand,
    });
  },
  setFormValues: (formValues) => {
    console.log('change formValues', formValues);
    set({ formValues });
    get().onChangeMetaData?.({
      expand: get().expand,
      formValues,
    });
  },
  save: () => {
    console.log(get().formValues);
    alert('save');
  },
  setOnChangeMetaData: (onChangeMetaData) => {
    set({onChangeMetaData});
  }
}));

export function FormTable(props: Props) {
  const setExpand = useMetaData((s) => s.setExpand);
  const setFormValues = useMetaData((s) => s.setFormValues);
  const setOnChangeMetaData = useMetaData((s) => s.setOnChangeMetaData);
  const save = useMetaData((s) => s.save);

  React.useEffect(() => {
    setExpand?.(props.metaData.expand ?? false);
  }, [props.metaData.expand, setExpand]);

  React.useEffect(() => {
    setFormValues(props.metaData.formValues ?? {});
  }, [props.metaData.formValues, setFormValues]);

  React.useEffect(() => {
    if(props.onChangeMetaData) setOnChangeMetaData(props.onChangeMetaData);
  }, [props.onChangeMetaData, setOnChangeMetaData]);

  return (
    <Container>
      <Body>
        <Forms />
      </Body>
      <Buttons>
        <Button onClick={save}>Save</Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div``;
const Body = styled.div``;
const Buttons = styled.div``;
