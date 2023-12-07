import './user.css';
import default_ava from '../../img/default_ava.jpg';



const User = ({ props, url }) => {

    const { avatar, friends, firstName, lastName } = props;

    return (
        <div className='user'>
            <img
                src={`${url}avatars/${avatar}`}
                alt="img"
                width='100'
                height='100'
                title={`${firstName} ${lastName}`}
                onError={e => console.log(e)}
            />

            <div className='info-container'>
                <div>Друзів: {friends.length}</div>
                <div>{`${firstName} ${lastName}`}</div>
            </div>

            <div className='control-container'>
                <button
                    className='add-post-button'
                    title='gallery'
                >
                    Галерея
                </button>
                <button
                    className='add-post-button'
                    title='friends'
                >
                    Друзі
                </button>
                <button
                    className='add-post-button'
                    title='add post'
                >
                    +
                </button>
            </div>

        </div>
    )
}


export default User;