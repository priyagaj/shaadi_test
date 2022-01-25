import React,{useState,useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Users.css'
import UserCard from '../../components/UserCard';

const Users = ({history}) => {
    const [users,setUsers] = useState([]);
    const [allUsers,setAllUsers] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then((res)=>{
            console.log('resssssssssss',res)
            return res.json();
        }).then((data)=>{
            setUsers(data.slice(0,10))
            setAllUsers([...data,...data,...data]);
            console.log('dataaaaaaa',data)
        })
    }
    const fetchMore = () => {
        const newUsers = allUsers.slice(users.length);
        console.log('newUsers',newUsers);
        setTimeout(()=>{
            setUsers([...users,...newUsers])
        },1000)
       
    }
    return(
        
        <InfiniteScroll
            dataLength={users && users.length} //This is important field to render the next data
            next={fetchMore}
            hasMore={users.length !== allUsers.length}
            loader={<h4>Loading...</h4>}
        >
        <div className='logoutDiv'>
        
         <img src='/logout.png' width='30px' height='30px' onClick={()=>history.push('./home')}/>
        </div>
        <div className='userDiv'> 

        {
                    users &&  users.map((user)=>{
                        return <UserCard user={user} key={new Date()}/>
                    })
                }
        </div>
        </InfiniteScroll>
           
       
    )
}

export default Users;