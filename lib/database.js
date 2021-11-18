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
  { yt_id: 'qz0aGYrrlhU', channel: 'Mosh', tags: ['html'] },
  { yt_id: 'hQAHSlTtcmY', channel: 'WebDev Simplified', tags: ['react'] },
  { yt_id: 'PkZNo7MFNFg', channel: 'fCC', tags: ['javascript'] },
  {
    yt_id: 'fYq5PXgSsbE',
    channel: 'WebDev Simplified',
    tags: ['css', 'flexbox'],
  },
  {
    yt_id: '0ik6X4DJKCc',
    channel: 'Traversy',
    tags: ['javascript', 'DOM'],
  },
];

export { ourVideos };
