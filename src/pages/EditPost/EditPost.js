import styles from './EditPost.module.css'


import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useFetchDocument } from "../../hooks/useFetchDocument";



function EditPost() {
  const {id} = useParams();
  const {document: post} = useFetchDocument('posts', id)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  useEffect(() => {

    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)

      const textTags = post.tagsArray.join(',')
      setTags(textTags)
    }

  }, [post])


  const {user} = useAuthValue();

  const {insertDocument, response} = useInsertDocument('posts');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormError('')

    //validate image URL
    try {
      new URL(image)
    } catch (error) {
      setFormError('A Imagem precisa ser uma URL.')
    }

    //create tags array
    const tagsArray = tags.split(',').map((tag)=> tag.trim().toLowerCase())

    // check all values

    if (!title || !image || !tags || !body) {
      setFormError('Ei, preencha TODOS os campos.')
    }

    //if something goes wrong...return
    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    });

    //redirect to home
    navigate('/')

  }

  return (
    <div className={styles.edit_post}>
     {post && (
     <>
       <h2>Editar post: {post.title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input  type="text" name="tilte" required placeholder="Escreva aqui o título do post" onChange={(e)=> setTitle(e.target.value)} value={title}  />
        </label>

        <label>
          <span>URL da imagem:</span>
          <input  type="text" name="image" required placeholder="Escreva aqui o título do post" onChange={(e)=> setImage(e.target.value)} value={image}  />
        </label>
        <p className={styles.preview_title}>Preview</p>
        <img className={styles.image_preview} src={post.image} alt={post.title} />

        <label>
          <span>Conteúdo:</span>
          <textarea name="body" required placeholder='Insira o conteúdo do post' onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input  type="text" name="tags" required placeholder="Insira as tags separadas por vírgulas" onChange={(e)=> setTags(e.target.value)} value={tags}  />
        </label>

        {!response.loading && <button className="btn">Editar</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
     </>)}
    </div>
  )
}

export default EditPost
