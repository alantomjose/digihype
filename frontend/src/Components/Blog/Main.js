import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[{title:{rendered:"Loading.."},excerpt:{rendered:"loading..."}, slug:"test"}],
            page:1
        }
    }
    componentDidMount(){
        axios.get('https://techcrunch.com/wp-json/wp/v2/posts?page=1')
        .then((res)=>{
            console.log(res.data)
            // console.log("worjs");
            this.setState(
                {   posts:res.data,
                    page:this.state.page+1
            })
        }).catch(function(err){
            console.log(err)
        })
    
    }

    getposts=()=>{

    }
    

    render() {
        return (
            <div className="mx-2 md:mx-12 lg:mx-32 item-center ">
            <div className="h-32 w-full  "> </div>
            {this.state.posts.map((post,key)=>{
                var id="/post/"+post.id;
                return(
                 <div className="shadow-lg my-24 ">
                    <h1 className="text-3xl py-6 px-20">{post.title.rendered} </h1>
                    <div className="px-20 pb-10">
                        <p>{post.excerpt.rendered} </p>
                        <Link to={id} className="bg-gray-500 rounded-full py-2 px-5 my-4 text-white">Read Mode</Link>
                    </div>
                </div>
                )
            })}
                
                
            </div>
        )
    }
}
