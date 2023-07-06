import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/cover;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOGIFY</Heading>
      <SubHeading>IIITDMJ</SubHeading>
    </Image>
  );
};

export default Banner;
