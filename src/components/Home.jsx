import React, { useState } from 'react'
import { Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import { GiShadowFollower } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { GoRepoForked } from "react-icons/go";
import axiosInstance from '../api/axiosInstance/axiosInstance';
import { allusersEndPoint, reposEndPoint } from '../api/api_url/api';

const Home = () => {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const FetchDetails = (data) => {
        // console.log(data);
        // console.log(`${allusersEndPoint}/${data.userName}/${reposEndPoint}`);

        axiosInstance.get(`${allusersEndPoint}/${data.userName}`)
            .then(res => {
                // console.log(res);
                setUser(res.data);
                setErrorMsg('');
                return axiosInstance.get(`${allusersEndPoint}/${data.userName}/${reposEndPoint}`);
            })
            .then(res => {
                // console.log(res)
                setRepos(res.data)
            })
            .catch(err => {
                setRepos([]);
                setUser('');
                setErrorMsg('Invalid User or Something went wrong.')
                console.log(err);
            });
    }

    return (
        <div className='manage-padding'>
            <h2 className='text-center'>GitHub Profile Fetcher</h2>
            <Container className='d-flex flex-column align-items-center justify-content-center'>

                {/* Error pointer  */}
                {errorMsg && (
                    <p className='text-alert'>{errorMsg}</p>
                )}

                {/* Form  */}
                <Form className='form-50' onSubmit={handleSubmit(FetchDetails)}>
                    <Form.Group className="mb-3" controlId="formBasicuserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" {...register('userName', {
                            required: {
                                value: true,
                                message: 'Required*'
                            }
                        })} placeholder="Enter userName" />
                        <Form.Text className="text-alert">
                            {errors.userName?.message}
                        </Form.Text>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit">Search</Button>
                    </div>
                </Form>

                {/* Output  */}
                {user && (
                    <div className="mt-3">
                        <div>
                            <Card>
                                <Card.Img variant="top" className='profile-img' src={user.avatar_url} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{user.name}</Card.Title>
                                    <Card.Text className='text-center'>{user.bio}</Card.Text>
                                    <div className='d-flex justify-content-between'>
                                        <span>
                                            <GiShadowFollower className='icon' /> {user.followers} {user.followers > 1 ? (<span>Followers</span>) : (<span>Follower</span>)}
                                        </span>
                                        <span>
                                            <SlUserFollowing className='icon' /> {user.following} Following
                                        </span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        {/* Repositories  */}
                        <div className='mt-3'>
                            <h4 className="mb-3">Repositories</h4>
                            {repos.length === 0 ? (
                                <p className='text-center'>No repositories found.</p>
                            ) : (
                                <div>
                                    {repos.map((repo) => (
                                        <div className='repo' key={repo.id}>
                                            <h6>{repo.name}</h6>
                                            <p>{repo.description || "No description"}</p>

                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <FaStar className='icon star-icon' /> {repo.stargazers_count} {repo.stargazers_count > 1 ? (<span>Stars</span>) : (<span>Star</span>)}
                                                </div>
                                                <div>
                                                    <GoRepoForked className='icon' /> {repo.forks_count} {repo.forks_count > 1 ? (<span>Forks</span>) : (<span>Fork</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Home