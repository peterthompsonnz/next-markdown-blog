import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <section className="layout">
        <div className="content">
        {children}        
        </div>
      </section>
      <Footer />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {                     
          font-family: helvetica, arial, sans-serif;
          font-size: 1.15rem;
          margin: 0;
          line-height: 1.6;
          background-color: #fafafa;
          color: rgb(51, 51, 51);
        }        
        a, a:link {
          color: rgb(0, 109, 221);
        }         
        img {
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.35);
        }     
            
      `}</style>
      <style jsx>{`        
        .layout {            
          margin: 0 auto;
          max-width: 768px;
          padding: 0 20px;
        }        
      `}</style>
    </>
  )
}
