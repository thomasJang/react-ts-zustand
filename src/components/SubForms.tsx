import { Form, Input } from 'antd';
import * as React from 'react';
import { useMetaData } from './FormTable';

export function SubForms() {
  const expand = useMetaData((s) => s.expand);
  const formValues = useMetaData((s) => s.formValues);
  const setFormValues = useMetaData((s) => s.setFormValues);
  const save = useMetaData((s) => s.save);

  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({ ...formValues });
  }, [form, formValues]);

  return (
    <div>
      <h3>TEST {`${expand}`} </h3>

      <Form
        form={form}
        initialValues={formValues}
        onValuesChange={(cv, avs) => setFormValues(avs)}
        onFinish={save}
      >
        {formValues.name}
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
