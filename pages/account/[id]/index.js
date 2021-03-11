import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SingleUser = ({ user }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteuser();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteuser = async () => {
        const userId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/users/${userId}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div>
                <>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <h1 className="text-4xl p-2 m-2 bg-gray-700">My post</h1>
                    {user.post.map(post => {
                        return(
                            <div key={post._id} className="p-3 border-black">
                              <div className="p-4 m-3 bg-red-400">
                                <p className="text-md">{post.author}</p>
                                <h1 className="text-2xl">{post.title}</h1>
                                <h1 className="text-lg">{post.content}</h1>
                              </div>
                            </div>
                          )
                        })
                    }
            )               
                </>
        </div>
    )
}

SingleUser.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const { data } = await res.json();

    return { user: data }
}

export default SingleUser;