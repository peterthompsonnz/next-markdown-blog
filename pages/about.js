import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">About me</h1>

        <p className="description">
          My name is Peter Thompson. I have been programming since the late 1990s. Programming is my main hobby. I also like cycling and gardening. I have been a software engineer (ages ago) and a digital technologies high school teacher. I have a degree in Information Technology.
        </p>

        
      </Layout>
    </>
  )
}

export default About