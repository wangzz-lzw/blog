import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="关于我" description="前端开发工程师的自我介绍" />}>
    <Content>
      <p>
        大家好，我是一名前端开发工程师，专注于构建高效、优雅的用户界面。我热爱编程，尤其擅长使用
        React 和 TypeScript 开发现代化的 Web 应用。
      </p>
      <p>
        在我的职业生涯中，我积累了丰富的项目经验，熟悉组件化开发、状态管理以及性能优化。我始终
        追求代码的可维护性和可扩展性，希望通过技术为用户带来更好的体验。
      </p>
    </Content>
  </Main>
);

export default About;
