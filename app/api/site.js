import axios from 'axios';
import getBaseUrl from './baseUrl';
const baseUrl = getBaseUrl();

export function fetchBlogPosts(blogName) {
  const finalvalue = axios.get(`${baseUrl}?query=query{
    blogPost(blogName:"${encodeURIComponent(blogName)}"){
      _id,
      title,
      date,
      imgSrc,
      imgAlt,
      href
    }
  }
  `).then((res) => res.data.data.blogPost
  ).catch((res) => {
    console.log('error', res);
    return [];
  });

  return finalvalue;
}

export function fetchBlogById(blogPostId) {
  const finalvalue = axios.get(`${baseUrl}?query=query{
    blogText(blogPostid:"${blogPostId}"){
      _id,
      blogURL,
      blogPostid,
      blogTitle
    }
  }
  `).then((res) => {
    const returnObject = res.data.data.blogText[0];
    const xhr = new XMLHttpRequest();
    if (returnObject.blogURL !== undefined) {
      xhr.open('GET', `${returnObject.blogURL}`, false);
      xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        returnObject.blogHTML = (this.responseText);
      };
      xhr.send();
      return returnObject;
    }
    return false;
  }
  ).catch((res) => {
    console.log('error', res);
    return false;
  });

  return finalvalue;
}
