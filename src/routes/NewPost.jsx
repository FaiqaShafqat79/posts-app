import { Link, Form, redirect } from 'react-router-dom'
import classes from './NewPost.module.css'
import Modal from '../components/Modal'
 
function NewPost() {

    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body"></label>
                    <textarea id="body" rows={3} name='body' required />
                </p>
                <p>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name='author' required />
                </p>
                <p className={classes.actions}>
                <Link type='button' to={'..'}>Cancel</Link>
                <button>Submit</button>
                </p>
            </Form>
        </Modal>
    )
}

export default NewPost

export const action = async ({ request }) => {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return redirect('/')
}