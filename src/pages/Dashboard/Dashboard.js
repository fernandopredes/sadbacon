import styles from './Dashboard.module.css'

import { Link } from "react-router-dom";

//hooks

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  //posts do usuário
  const {documents: posts, loading, error} = useFetchDocuments('posts', null, uid)


  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerenciamento de posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
        </div>
      ) : (
        <div>
          <p>Tem post!</p>
        </div>
      )}
      {posts && posts.map((post) => ( <h3>{post.title}</h3> ))}
    </div>
  )
}

export default Dashboard
