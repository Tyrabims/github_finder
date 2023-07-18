import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import apiClient from '../services/api-client';
import { FetchUserProps } from './Form';

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
    <Card className="w-75 mt-4">
      <Card.Body>
        <Card.Text>
          <Row>
            <Col>
              <Image src={userDetails?.avatar_url} />
            </Col>
            <Col>{userDetails?.bio}</Col>
          </Row>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
