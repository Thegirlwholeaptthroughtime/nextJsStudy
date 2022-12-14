import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Item from '../../src/component/Item'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import Head from 'next/head'

const Post = ({item, name}) => {

  return (
    <>
    {item &&  (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name='description' content={item.description}></meta>
      </Head>
      <h1>{name}환경입니다</h1> 
      <Item item={item}/>
    </>
  
    )}
    </>
      
  )

}

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl =  `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const res = await axios.get(apiUrl);
  const data = res.data;

  return{
    props:{
      item:data,
      name : process.env.name,
    },
  };
}