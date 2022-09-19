import styles from './CreatePosts.module.css'


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";


function CreatePosts() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Derrame aqui suas lágrimas, pobre Bacon...</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input  type="text" name="tilte" required placeholder="Escreva aqui o título do post" onChange={(e)=> setTitle(e.target.value)} value={title}  />
        </label>

        <label>
          <span>URL da imagem:</span>
          <input  type="text" name="image" required placeholder="Escreva aqui o título do post" onChange={(e)=> setImage(e.target.value)} value={image}  />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea name="body" required placeholder='Insira o conteúdo do post' onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input  type="text" name="tags" required placeholder="Insira as tags separadas por vírgulas" onChange={(e)=> setTags(e.target.value)} value={tags}  />
        </label>
        <button className="btn">Cadastrar</button>
        {/* {!loading && }
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePosts
