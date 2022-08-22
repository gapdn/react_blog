import { React } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFounfPage from './NotFoundage';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articleContent.find(article => article.name === name)
  const otherArticles = articleContent.filter(article => article.name !== name)

  if (!article) return <NotFounfPage/>

  return(
    <>
    <h1>{article.title}</h1>
    {article.content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
    <h3>Other Articles:</h3>
    <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
