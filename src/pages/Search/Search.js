import styles from './Search.module.css'
import { Link } from 'react-router-dom';

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

//components
import PostDetail from '../../components/PostDetail';


export const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const {documents: posts} = useFetchDocuments('posts', search)

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não existe nenhum post com esse nome.</p>
            <Link to='/' className="btn btn-dark">Voltar</Link>
          </div>
        )}
        {posts && posts.map((post)=> (
          <PostDetail key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
