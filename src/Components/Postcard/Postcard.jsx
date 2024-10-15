import { useEffect, useState } from 'react';
import profile from '../../Image/7178489.png';
import axios from 'axios';

const Postcard = ({ data, explore }) => {
    const [liked, setLiked] = useState(false);
    const {
        content,
        location,
        title,
        _id,
        author: { username }
    } = data;
    const getAuthToken = () => {
        const token = localStorage.getItem('token');
        if (!token) return null;
        return `Bearer ${token}`;
    };
    const config = {
        headers: {
            Authorization: getAuthToken(),
        },
    };

    useEffect(() => {
        const fetchLikeStatus = async () => {


            try {
                const response = await axios.get(
                    `http://localhost:6500/api/likestatus/${_id}`,
                    {
                        headers: {
                            Authorization: getAuthToken(), // Add the token in headers
                        },
                    }
                );
                // console.log(response?.data?.islike.liked);
                if(response?.data?.islike.liked){
                    setLiked(response?.data?.islike?.liked);
                }
                
            } catch (error) {
                console.error('Error fetching like status:', error.message);
            }
        };

        fetchLikeStatus();
    }, [_id]);

    console.log(liked);

    const handleLikeClick = async () => {
        try {
            const response = await axios.post(
                'http://localhost:6500/api/like',
                { postId: _id, Like: true },
                config
            );
            if (response.status === 200) {
                setLiked(true);
            }
            console.log(response);
        } catch (error) {
            console.error('Error liking the post:', error.response.data.message);
        }
    };

    return (
        <div className="flex justify-center w-full">
            <div className="bg-white border rounded-sm w-9/12 mb-2">
                <div className="flex items-center px-4 py-3">
                    <img className="h-8 w-8 rounded-full" alt="profile" src={profile} />
                    <div className="ml-3">
                        <span className="text-sm font-semibold antialiased block leading-tight">
                            {username}
                        </span>
                        <span className="text-gray-600 text-xs block">{location}</span>
                    </div>
                </div>
                <div className='p-3'>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>

                {!explore && (
                    <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                        <div className="flex gap-4">
                            <svg
                                fill={liked ? "red" : "none"} 
                                height="24"
                                viewBox="0 0 48 48"
                                width="24"
                                onClick={handleLikeClick}
                                style={{ cursor: "pointer", stroke: liked ? "red" : "#262626", strokeWidth: "2px" }}
                            >
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                            </svg>
                        </div>
                    </div>
                )}
                {!explore && (
                    <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                )}
            </div>
        </div>
    );
};

export default Postcard;
