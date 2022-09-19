import styles from './CreatePosts.module.css'


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from '../../hooks/useInsertDocument';


function CreatePosts() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  const {user} = useAuthValue()

  const {insertDocument, response} = useInsertDocument('posts');

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormError('')

    //validate image URL

    //create tags array

    // check all values

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    });

    //redirect to home


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

        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  )
}

export default CreatePosts
