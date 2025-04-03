import { useRouter } from 'next/router';

const BlogListPage = () => {
  const router = useRouter();

  const handleAddArticle = () => {
    router.push('/backend/blog/addArticle'); // 跳转到添加文章页面
  };

  return (
    <div>
      <h1>文章列表</h1>
      <button onClick={handleAddArticle}>添加文章</button>
      <ul>
        {/* 示例文章列表 */}
        <table>
          <thead>
            <tr>
              <th>标题</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>文章 1</td>
              <td>
                <button>编辑</button>
                <button>删除</button>
              </td>
            </tr>
            <tr>
              <td>文章 2</td>
              <td>
                <button>编辑</button>
                <button>删除</button>
              </td>
            </tr>
            <tr>
              <td>文章 3</td>
              <td>
                <button>编辑</button>
                <button>删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
    </div>
  );
};

export default BlogListPage;
