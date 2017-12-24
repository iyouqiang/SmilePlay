'use strict'

import queryString from 'query-string';
import _ from 'lodash';
import config from './config';

let request={

}

  request.get = (url,params) => {

    if (params) {
        url += '?' + queryString.stringify(params)
    }

    return fetch(url)
        .then((response)=>response.json())
        .then((response)=>{
        return response;
        })
  }

  request.post = (url, body) => {
    let map = _.extend(config.map, {
        body:JSON.stringify(body)
    })
      console.log(map);
      return fetch(url,map)
          .then((response)=>response.json())
          .then((response)=> {
        return response;
          })
  }

module.exports = request;