export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};

// export const config = {
//   'username':'postgres',
//   'password':'Oanh123456',
//   'host':'postgres.cj2ffn1rnxvm.us-east-2.rds.amazonaws.com',
//   'database':'postgres',
//   'dialect': 'postgres',
//   'aws_media_bucket':'076177625008-project3-3',
//   'aws_region':'us-east-2',
//   'aws_profile':'default',
//   'jwt': {
//    'secret': 'hello',
//  },
//   'url':'http://localhost:8100'
//  }