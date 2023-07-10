import 'bootstrap/dist/css/bootstrap.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import apiClient from '../services/api-client';
 

interface FetchUserProps {
  "login": string,
  "id": number,
  "node_id": string,
  "avatar_url": string,
  "gravatar_id": string,
  "url": string,
  "html_url": string,
  "followers_url": string,
  "following_url": string,
  "gists_url": string,
  "starred_url": string,
  "subscriptions_url": string,
  "organizations_url": string,
  "repos_url": string,
  "events_url": string,
  "received_events_url": string,
  "type": string,
  "site_admin": boolean,
  "score": number
}


const Form = () => {
  const [userdetails, setUserdetails] = useState('');
  const [users, setUsers] = useState <FetchUserProps[]>([])

 

  //fetch data
  const searchUsername = async () => {
    try {
        const {data}  = await apiClient.get("/search/users?q="+ userdetails)
        setUsers(data.items)
        return data?.item 
      
    } catch(error) {
      return null;
    }
  }
  
  //submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (userdetails) {
      await searchUsername();
    }
  }
  const clearBtn = () => {
    
  }
      
  return (
    
    <div className="search">
      <form
       className="input-group mb-3">
        <input 
          onChange={(event) => setUserdetails(event.target.value)}
          value={userdetails}
          type="text"
          className="form-control"
          placeholder="Search Users"
        />
          <button className="btn btn-dark" 
          type="submit" 
          onClick={handleSubmit}>
          Search
          </button>
        </form>
     
        <div>
            {users.map((item) => (
              <>
                 <div className="d-grid gap-2">
        <button className="btn btn-light" type="button">Clear</button>
      </div>
      <div className='container'>
              <p>{item.login}</p>
              <img src={item.avatar_url} />
              <div>
              <a className="btn btn-primary" href="#" role="button">More</a>
              </div>
              </div>
              </>
            ))}
          
        </div>
      </div>
    
  );
};

export default Form
