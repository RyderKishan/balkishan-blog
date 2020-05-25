const prodConfig = {
  API_LINK: 'https://us-central1-balkishan-blog.cloudfunctions.net/app',
};

const localConfig = {
  API_LINK: 'http://localhost:7400',
};

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const config = process.env.NODE_ENV === 'development' ? localConfig : prodConfig;

export default config;
