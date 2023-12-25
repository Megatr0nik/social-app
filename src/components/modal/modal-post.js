import './modal-post.css';
import { _EMOJI } from '../../constant/emoji';
import { useState } from 'react';
import { postRequest } from '../../services/request';

const ModalPost = ({ setModalPost, activePost, id }) => {


    const [textData, setText] = useState(
        {
            postText: '',
            title: ''
        }
    );
    const [image, setImage] = useState();



    const onPost = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.set('postData', JSON.stringify(textData));
        formData.set('image', image);

        postRequest(formData, `/person/${id}/post/`);

    }


    const onInput = (e) => {
        const name = e.target.name;
        console.log(name);

        if (name === 'image') {
            setImage(e.target.files[0]);
        } else {
            setText({
                ...textData,
                [name]: e.target.value
            })
        }
    }

    const Emoji = () => {

        let arrEmoji = [];
        for (let i = _EMOJI[0]; i < _EMOJI[1]; i++) {
            arrEmoji.push(String.fromCodePoint(i));
        }
        const data = arrEmoji.map((em, i) => {
            return (
                <span
                    onClick={e => setText({
                        ...textData,
                        postText: textData.postText + e.target.innerHTML
                    })}
                    key={`em${i}`}
                    value={em}
                    defaultValue={em}

                >
                    {em}
                </span>
            )
        });
        return data;
    }

    return (
        <div className="post-container">
            <h3>Create post</h3>
            <form
                encType="multipart/form-data"
                name='post-form'
                className='form-container-post'
                onSubmit={onPost}
            >
                <input
                    type="text"
                    name='title'
                    placeholder='Тема'
                    value={textData.title}
                    onChange={onInput}
                />

                <textarea
                    className='text-input'
                    name="postText"
                    style={{ resize: 'none' }}
                    onChange={onInput}
                    value={textData.postText}
                ></textarea>

                <div className='controll'>
                    <label htmlFor="image-upload" className=''>{'\u{1F5BC}'}</label>
                    <input
                        name="image"
                        style={{ display: 'none' }}
                        type="file"
                        id="image-upload"
                        accept=".png, .jpg, .jpeg"
                        onInput={onInput}
                    />

                    <label htmlFor="add-post">{'\u{2705}'}</label>
                    <button
                        // style={{ display: 'none' }}
                        type="submit"
                        id='add-post'
                    // onClick={onPost}
                    />

                </div>

                <div className='emoji-container'><Emoji /> </div>

            </form>

        </div>
    )

}


export default ModalPost;