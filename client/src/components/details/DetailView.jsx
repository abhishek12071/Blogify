import { useEffect, useState, useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';

const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  [theme.breakpoints.down('md')]: {
    margin: 0,
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '80vh',
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundSize: 'cover'
});

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
  word-break: break-word;
  color: #333;
`;

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border-radius: 50%;
  color: #fff;
  background-color: #ff4081;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #f50057;
    transform: scale(1.1);
  }
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border-radius: 50%;
  color: #fff;
  background-color: #f44336;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
    transform: scale(1.1);
  }
`;

const Author = styled(Box)`
  color: #878787;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const Description = styled(Typography)`
  word-break: break-word;
  line-height: 1.5;
  color: #555;
`;

const DetailView = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const { account } = useContext(DataContext);

  const navigate = useNavigate();
  const url =
    post.picture ||
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    let response = await API.deletePost(post._id);
    if (response.isSuccess) {
      navigate('/');
    }
  };

  return (
    <Container>
      <Image src={url} alt="blog" />

      {account.username === post.username && (
        <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={`/update/${post._id}`}>
            <EditIcon />
          </Link>
          <DeleteIcon onClick={deleteBlog} />
        </Box>
      )}

      <Heading>{post.title}</Heading>

      <Author>
        <Typography>
          Author: <Box component="span" style={{ fontWeight: 600 }}>{post.username}</Box>
        </Typography>
        <Typography style={{ marginLeft: 'auto', color: '#888' }}>{new Date(post.createdDate).toDateString()}</Typography>
      </Author>

      <Description>{post.description}</Description>

      <Comments post={post} />
    </Container>
  );
};

export default DetailView;
