import fs from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  success: boolean;
  message: string;
  filePath?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: '只允许 POST 请求',
    });
  }

  try {
    const {
      content = '默认内容',
      title = '默认标题',
      description = '默认描述',
      date = new Date().toISOString(),
      modifiedDate = new Date().toISOString(),
    } = req.body;

    if (!content || !title || !description || !date || !modifiedDate) {
      return res.status(400).json({
        success: false,
        message: '缺少必要的字段',
      });
    }

    // 确保 _posts 目录存在
    const postsDir = path.join(process.cwd(), '_posts');
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    // 生成文件名和路径
    const fileName = `${Date.now()}.md`;
    const filePath = path.join(postsDir, fileName);

    // 构建文件内容
    const fileContent = `---
title: '${title}'
description: ${description}
date: '${date}'
modifiedDate: '${modifiedDate}'
image: /assets/images/posts/random-img.jpg
---

${content}
`;

    // 写入文件
    fs.writeFileSync(filePath, fileContent, 'utf8');

    return res.status(200).json({
      success: true,
      message: '文章保存成功',
      filePath: fileName,
    });
  } catch (error) {
    console.error('保存文章失败:', error);
    return res.status(500).json({
      success: false,
      message: '保存文章时发生错误',
    });
  }
}
