import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Image, Row, ListGroup } from 'react-bootstrap';
import apiClient from '../services/api-client';
import { FetchUserProps } from './Form';
import '../index.css';



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
}

const UserDetails = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState<UserDetailsData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiClient.get(`/users/${username}`);
        setUserDetails(data);
      } catch {
        throw new Error('Error fetching data');
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
      <Card className="w-85 mt-4">
        <Card.Body>
          <Card.Text>
            <Row>
              <Col>
                <Image
                  className=" rounded-circle"
                  style={{ width: 150 }}
                  src={userDetails?.avatar_url}
                />
                <Col>{userDetails?.name}</Col>
                <Col>{userDetails?.location}</Col>
              </Col>
              <Col>
                {userDetails?.bio}
                <br />
                Username: {userDetails?.login}
              </Col>
            </Row>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <br />
      <Card className="w-85">
        <Card.Body>
          <Button variant="danger" style={{paddingRight: '20'}}>Followers: {userDetails?.followers}</Button>
          <Button variant="success">Following: {userDetails?.following}</Button>
          <Button variant="secondary">Public Repos: {userDetails?.public_repos}</Button>
          <Button variant="dark">Public Gists: {userDetails?.public_gists}</Button>
        </Card.Body>
      </Card>
      <br />
      <Card className="w-85 px-50">
        <Card.Header>{userDetails?.repos_url}</Card.Header>
      </Card>
      <br />
      <Card className="w-85">
        <Card.Header>Featured</Card.Header>
      </Card>
      <br />
      <Card className="w-85">
        <Card.Header>Featured</Card.Header> 
      </Card>
      <br />
      <Card className="w-85">
        <Card.Header>Featured</Card.Header>    
      </Card>

      <br />
      <Card className="w-85">
        <Card.Header>Featured</Card.Header>
      </Card>
    </>
  );
};

export default UserDetails;
