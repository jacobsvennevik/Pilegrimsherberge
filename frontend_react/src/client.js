import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const clientRead = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion: '2023-07-12',
    useCdn: true,
    token:process.env.REACT_SANITY_TOKEN_READ,
});
export const clientApp = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion: '2023-07-12',
    useCdn: false,
    token:process.env.REACT_SANITY_TOKEN_READ_WRITE,
});


const builder = imageUrlBuilder(clientRead);

export const urlFor = (source) => builder.image(source);