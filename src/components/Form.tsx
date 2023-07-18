import 'bootstrap/dist/css/bootstrap.css';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
    <div className="search">
      <form className="input-group mb-3">
        <input
          onChange={(event) => setUserdetails(event.target.value)}
          value={userdetails}
          type="text"
          className="form-control"
          placeholder="Search Users"
        />
        <button className="btn btn-dark" type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>

      <div>
        {users.map((item) => (
          <>
            <div className="d-grid gap-2">
              <button className="btn btn-light" type="button">
                Clear
              </button>
            </div>
            <div className={styles.container}>
              <img src={item.avatar_url} alt="user" />
              <div>{item.login}</div>
              <Button
                className="btn btn-primary"
                role="button"
                onClick={() => navigate(`/details/${item.login}`)}
              >
                More
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Form;
