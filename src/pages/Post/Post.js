import styles from "./Post.module.css"

//hooks

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

function Post() {
  const { id } = useParams()
  const {document: post, loading} = useFetchDocument('posts',id)

  return (
    <div className={styles.post_container}>
      {loading && (<p>Carregando o post...</p>)}
      {post && (
        <>
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        <p>{post.body}</p>
        <h3>Assuntos relacionados:</h3>
        <div className={styles.tags}>
          {post.tagsArray.map((tag)=>(
            <p key={tag}><span>#</span>{tag}</p>
          ))}
        </div>
        </>
      )}
    </div>
  )
}

export default Post
