import React from "react";

export default class HomePage extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  
    render() {
      return (
        <ins className='adsbygoogle'
             style={{ display: 'block' }}
             data-ad-client='ca-pub-4143105908582327'
             data-ad-slot='4143105908582327'
             data-ad-format='auto' />
      );
    }
  }