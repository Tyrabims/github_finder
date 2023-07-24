import 'bootstrap/dist/css/bootstrap.css';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import apiClient from '../services/api-client';
import styles from '../Forms.module.css';

export interface FetchUserProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

const Form = () => {
  const [userdetails, setUserdetails] = useState('');
  const [users, setUsers] = useState<FetchUserProps[]>([]);
  const navigate = useNavigate();

  const searchUsername = async () => {
    try {
      const { data } = await apiClient.get(`/search/users?q=${userdetails}`);
      setUsers(data.items);
      return data?.item;
    } catch {
      throw new Error('Error fetching data');
    }
  };

  // submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (userdetails) {
      await searchUsername();
    }
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
        <input
          onChange={(e) => setUserdetails(e.target.value)}
          value={userdetails}
          type="text"
          className="search" 
          placeholder="Search Users..."
        />
        <button className="btn btn-dark" type="submit" onClick={handleSubmit}>
          Search
        </button>
      <div>
        {users.map((item) => (
          <>
            <div className="d-grid gap-2">
              <button className="btn btn-light" type="button">
                Clear
              </button>
            </div>
            
            <Card className={styles.container}>
              <Card.Body>
                <Card.Img className=' sqaure-rounded-circle' src={item.avatar_url} />
                <Card.Text>
                {item.login}
                </Card.Text>
                <Button variant='primary'
                onClick={() => navigate(`/details/${item.login}`)}
                >
                More
              </Button>
              </Card.Body>
              
            </Card>
  
            
            
            {/* <div className={styles.container}>
              <img src={item.avatar_url} alt="user" />
              <div>{item.login}</div>
              <Button
                className="btn btn-primary"
                role="button"
                onClick={() => navigate(`/details/${item.login}`)}
              >
                More
              </Button>
            </div> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Form;
