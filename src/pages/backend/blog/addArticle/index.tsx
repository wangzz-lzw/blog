import { useState } from 'react';

import MarkdownIt from 'markdown-it';
import Head from 'next/head';
import { useRouter } from 'next/router';

const md = new MarkdownIt();

interface DialogCardProps {
  data: { explanation: string };
}

const DialogCard: React.FC<DialogCardProps> = ({ data }) => {
  const htmlString = md.render(data.explanation);

  return (
    <div className="w-full h-full p-4 bg-gray-100 border rounded overflow-auto">
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
};

const AddArticlePage = () => {
  const router = useRouter();
  const [articleData, setArticleData] = useState({ explanation: '' });
  const [isSaving, setIsSaving] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleData({ explanation: e.target.value });
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const response = await fetch('/api/article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: articleData.explanation }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }
      router.push('/backend/blog');
    } catch (error) {
      alert(error instanceof Error ? error.message : '保存文章失败');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Head>
        <title>添加文章</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">添加文章</h1>
        <div className="flex space-x-4">
          {/* Left: Input */}
          <div className="w-1/2">
            <textarea
              className="w-full h-full p-4 border rounded resize-none"
              rows={20}
              placeholder="Write your article here..."
              value={articleData.explanation}
              onChange={handleInputChange}
            />
          </div>
          {/* Right: Preview */}
          <div className="w-1/2">
            <DialogCard data={articleData} />
          </div>
        </div>
        <button
          className={`mt-4 px-4 py-2 text-white rounded ${
            isSaving
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Article'}
        </button>
      </div>
    </>
  );
};

export default AddArticlePage;
