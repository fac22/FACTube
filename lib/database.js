// json format
// {
//   "videos": [
//     {"yt_id": "qz0aGYrrlhU", "tags": ["html"]},
//     {"yt_id": "hQAHSlTtcmY", "tags": ["react"]},
//     {"yt_id": "PkZNo7MFNFg", "tags": ["javascript"]},
//     {"yt_id": "fYq5PXgSsbE", "tags": ["css", "flexbox"]},
//     {"yt_id": "0ik6X4DJKCc", "tags": ["javascript", "DOM"]}
//   ]
// }

const ourVideos = [
  { yt_id: 'qz0aGYrrlhU', channel: 'Mosh', tags: ['html'], likes: 0 },
  {
    yt_id: 'hQAHSlTtcmY',
    channel: 'WebDev Simplified',
    tags: ['react'],
    likes: 0,
  },
  { yt_id: 'PkZNo7MFNFg', channel: 'fCC', tags: ['javascript'], likes: 0 },
  {
    yt_id: 'fYq5PXgSsbE',
    channel: 'WebDev Simplified',
    tags: ['css', 'flexbox'],
    likes: 0,
  },
  {
    yt_id: '0ik6X4DJKCc',
    channel: 'Traversy',
    tags: ['javascript', 'DOM'],
    likes: 0,
  },
];

const dummyData = [
  {
    id: {
      videoId: 'yfoY53QXEnI',
    },
    snippet: {
      publishTime: '2019-07-19',
      title: 'CSS Crash Course For Absolute Beginners',
      description:
        'In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. ',
      channelTitle: 'Traversy Media',
    },
    likes: 0,
  },
  {
    id: {
      videoId: '1PnVor36_40',
    },
    snippet: {
      publishedAt: '2018-08-23',
      title: 'Learn CSS in 20 Minutes',
      description:
        'In this video we will cover everything you need to know to get up and running with CSS in only 20 minutes.',
      channelTitle: 'Web Dev Simplified',
    },
    likes: 0,
  },
];

const dummyProfiles = [
  { id: 1, username: 'Dog' },
  { id: 5, username: 'Cat' },
];

const dummyLikeLists = [
  { id: 1, user_id: 1, video_id: 'yfoY53QXEnI' },
  { id: 2, user_id: 5, video_id: 'yfoY53QXEnI' },
];

export { ourVideos, dummyData, dummyProfiles, dummyLikeLists };
