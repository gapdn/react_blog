import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFounfPage from './NotFoundage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articleContent.find(article => article.name === name)
  const otherArticles = articleContent.filter(article => article.name !== name)

  const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFounfPage/>

  return(
    <>
    <h1>{article.title}</h1>
    <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
    {article.content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
    <CommentsList comments={articleInfo.comments} />
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
    <h3>Other Articles:</h3>
    <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
