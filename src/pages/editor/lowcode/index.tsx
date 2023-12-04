import { Col, Row } from 'antd';
// import GGEditor, { Mind } from 'gg-editor';

import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import styles from './index.less';

// GGEditor.setTrackable(false);

export default () => (
  <PageContainer content="快速打造高生产力的低代码研发平台">
    {/* <GGEditor className={styles.editor}> */}
    <Row className={styles.editorHd}>
      <Col span={24}>
        <Button type="primary" target="_blank" href="http://localhost:5556/">
          跳转至low code
        </Button>
      </Col>
    </Row>
    {/* </GGEditor> */}
  </PageContainer>
);
