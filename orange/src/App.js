import React, {useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import  {Table}  from 'antd';
function App(){
    const[posts,setPosts]=useState([])
    useEffect(() => {
const url='https://jsonplaceholder.typicode.com/posts';
fetch(url).then(resp=>resp.json())
 .then(resp=>  
    setPosts(resp)
   // console.log(resp)  
    )},[] )
const Column = [
    {
       title:'userId',
       dataIndex:'userId'
    },
    {
        title:'id',
        dataIndex :'id'
    },
    {
        title:'title',
        dataIndex:'title'
    },
    {
      title:'body',
      dataIndex:'body'
  }
];
console.log(posts)
return (
  <div>
  <Table dataSource={posts} columns={Column} />

  { 
     posts.map((post,index)=><div key={index}>

      </div>
     )
 }

 </div>
)
 }
export default App

