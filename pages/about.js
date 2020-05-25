import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">About me</h1>

        <p className="description">
          My name is Peter Thompson. Programming is a passion of mine. I have been programming since the late 1990s. I started out learning C and C++ in the first year of my Bachelor of Information Technology degree. In my spare time I taught myself JavaScript and HTML so I could make my daughter games with a GUI. In later years of my degree I learned Java, VBA, PHP and SQL. Currently I mainly program using JavaScript and also dabble in C, C++, Java and Python.</p>

          <p>
          I also enjoy cycling, gardening and making muffins. In my working life (I am now retired) I have had quite a few jobs. As a young man I worked in a plant nursery and on market gardens. I have also been: a gardener, Psychiatric Nurse, software engineer (ages ago) and a Digital Technologies High School teacher.
        </p>        
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      //description: configData.default.description,
    },
  }
}
