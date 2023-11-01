import Background from './components/Background';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Typography from './components/Typography';

export default function Home() {
  return (
    <>
      <Background />
      <main className='grid-lg px-10'>
        <NavBar
          className='mb-10'
          prefix={
            <Typography className='col-span-1 col-start-1 px-4' tagName='h6'>
              Available for Freelance/Remote works
            </Typography>
          }
          logoUrl='images/Logo.svg'
          postfix={
            <div className='col-span-1 col-start-5 justify-self-end px-4'>
              <Typography className='text-end' tagName='h6'>
                Saigon, Vietnam
              </Typography>
              <Typography className='text-end' tagName='h6'>
                {new Date().toLocaleTimeString()}
              </Typography>
            </div>
          }
        />
        <Hero />
      </main>
    </>
  );
}
