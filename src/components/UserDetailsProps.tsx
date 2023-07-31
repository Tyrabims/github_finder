import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Image, Row, ListGroup } from 'react-bootstrap';
import apiClient from '../services/api-client';
import { FetchUserProps } from './Form';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaCheck } from 'react-icons/fa';
import { BsFillXCircleFill } from 'react-icons/bs';

interface UserDetailsData extends FetchUserProps {
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: number;
  updated_at: number;
  repos: string[];
}

const UserDetails = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState<UserDetailsData>();
  const [userRepos, setUserRepos] = useState<UserDetailsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiClient.get(`/users/${username}`);
        setUserDetails(data);
      } catch {
        throw new Error('Error fetching data');
      }
    };
    const fetchUserRepos = async () => {
      try {
        const { data } = await apiClient.get(`/users/${username}/repos?per_page=5`);
        setUserRepos(data);
      } catch {
        throw new Error('Error fetching data');
      }
    };
    fetchData();
    fetchUserRepos();
  }, []);
  console.log(userRepos);

  return (
    <>
      <Button variant="white" className="border border-1 me-4">
        Back To Search
      </Button>
      Hireable: {userDetails?.hireable ? <FaCheck /> : <BsFillXCircleFill />}
      <Card className="w-85 mt-4">
        <Card.Body>
          <Card.Text>
            <Row>
              <Col className="text-center">
                <Image
                  className=" rounded-circle mb-3"
                  style={{ width: 150 }}
                  src={userDetails?.avatar_url}
                />
                <Col className="fw-bolder">{userDetails?.name}</Col>
                <Col>{userDetails?.location}</Col>
              </Col>
              <Col>
                <span className="fw-bold">Bio</span>
                <br />
                {userDetails?.bio}
                <Button variant="dark" className="mt-3 mb-3">
                  Visit github profile
                </Button>
                <br />
                Username: {userDetails?.login}
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="w-85">
        <Card.Body className="text-center">
          <Button variant="danger" className="d-inline  me-2 btn-sm">
            Followers: {userDetails?.followers}
          </Button>
          <Button variant="success" className="d-inline me-2 btn-sm">
            Following: {userDetails?.following}
          </Button>
          <Button variant="secondary" className="d-inline me-2 btn-sm">
            Public Repos: {userDetails?.public_repos}
          </Button>
          <Button variant="dark" className="d-inline me-2 btn-sm">
            Public Gists: {userDetails?.public_gists}
          </Button>
        </Card.Body>
      </Card>
      <ListGroup className="w-85 mt-3 text-danger">
          {userRepos.map((userRepo) => ( 
                  <ListGroup.Item className='mb-3' >
                    {userRepo?.name}
                  </ListGroup.Item>
          ))}
        
      </ListGroup>
    </>
  );
};

export default UserDetails;
