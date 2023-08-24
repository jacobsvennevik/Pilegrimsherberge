import React from 'react';

const AppHead = () => {
  return (
    <head>
      {/* Meta */}
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Viking Tours</title>
      <meta name="description" content="" />

      {/* The compiled CSS file */}
      <link rel="stylesheet" href="css/production.css" />

      {/* Web fonts */}
      <link href="https://fonts.googleapis.com/css?family=Cabin:400,700|Playfair+Display:900" rel="stylesheet" />

      {/* favicon.ico. Place these in the root directory. */}
      <link rel="shortcut icon" href="favicon.ico" />
    </head>
  );
}

export default AppHead;
