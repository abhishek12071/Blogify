import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Blogify</Typography>
                <Text variant="h5">Designed and implemented a user-friendly platform enabling individuals to create, edit and share journal entries
                    inclusive of multimedia content, fostering an engaging and interactive community
                    <br /><br />
                    React, Node, Express, MongoDB was used to build the website.
                    <br /><br />
                    10+ prominent features including login/sign-up, view, create, delete and comment on others blog etc, used JWT
                    authentication for login.
                    <br /><br />
                    Repository Link:
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/abhishek12071/Blogify" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Link href="https://www.linkedin.com/in/abhishek-kumar-gupta-7b2291217/" color="inherit" target="_blank">
                        <LinkedInIcon />
                    </Link>
                    or send me an Email on  <Email /> 20bcs012@iiitdmj.ac.in
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;