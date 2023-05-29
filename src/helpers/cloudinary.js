import { Cloudinary } from '@cloudinary/url-gen';

const cloud = new Cloudinary({
  cloud: {
    cloudName: 'dboarinns',
  },
});

export default cloud;
