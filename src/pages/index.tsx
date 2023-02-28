import Head from 'next/head';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MainLinks from '../components/MainLinks';
import NewInAI from '../components/NewInAI';

const navigation = [
  {
    name: 'About',
    href: 'https://cerebralvalley.ai/about',
  },
  { name: 'Events', href: 'https://cerebralvalley.ai/events' },
  { name: 'Co-Working', href: 'https://cerebralvalley.ai/build' },
  { name: 'Newsletter', href: 'https://cerebralvalley.beehiiv.com/' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Cerebral Valley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero navigation={navigation} />
      <MainLinks />
      <NewInAI />
      <Footer navigation={navigation} />
    </>
  );
}
