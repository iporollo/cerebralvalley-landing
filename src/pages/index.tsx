import Head from 'next/head';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import useDeviceSize from '../hooks';

export default function Home() {
  const [width, height] = useDeviceSize();

  return (
    <>
      <Head>
        <title>Cerebral Valley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className="flex items-center justify-between p-4 bg-white border-b">
        <img src="/newinai.png" alt="logo" className="h-10 rounded-md" />
        <div className="text-lg font-medium">{`Cerebral Valley`}</div>
        <div></div>
      </nav>
      <main className="flex justify-center">
        {width > 815 && (
          <div className="w-full lg:w-1/2 m-auto text-center">
            <h1 className="text-2xl font-bold">
              A community for AI builders and founders
            </h1>
            <div className="flex justify-center">
              <TwitterTweetEmbed tweetId={'1612482298670379010'} />
              <TwitterTweetEmbed tweetId={'1624246402846191617'} />
            </div>
          </div>
        )}

        <div className="w-full md:w-1/2">
          <ul className="mt-16 w-3/4 mx-auto list-none">
            {/* <li className=" border border-gray-400 rounded-lg hover:bg-gray-200 mb-4">
              <a
                href="https://airtable.com/shr33svLXILbTf1bs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <span className="mr-4" style={{ fontSize: 40 }}>
                    👋
                  </span>
                  About
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </li> */}
            <li className=" border border-gray-400 rounded-lg hover:bg-gray-200 mb-4">
              <a
                href="https://airtable.com/shr33svLXILbTf1bs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <span className="mr-4" style={{ fontSize: 40 }}>
                    💻
                  </span>
                  AI Builders Co-Working
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </li>
            <li className=" border border-gray-400 rounded-lg hover:bg-gray-200 mb-4">
              <a
                href="http://cerebralvalley.ai/events"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <span className="mr-4" style={{ fontSize: 40 }}>
                    🌉
                  </span>
                  AI Events List
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </li>
            <li className=" border border-gray-400 rounded-lg hover:bg-gray-200 mb-4">
              <a
                href="https://newinai.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src="/substack_logo.png"
                    alt="logo"
                    className="rounded-md pr-4"
                    style={{ height: 'auto', width: 64 }}
                  />
                  Newsletter
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </li>
            <li className=" border border-gray-400 rounded-lg hover:bg-gray-200 mb-4">
              <a
                href="https://twitter.com/whatsnewinai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    viewBox="0 0 248 204"
                    width="64"
                    height="auto"
                    className="rounded-md pr-4"
                  >
                    <path
                      fill="#1d9bf0"
                      d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                    />
                  </svg>
                  Twitter
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
          {width < 815 && (
            <div className="w-full md:w-1/2 m-auto text-center mt-8">
              <h1 className="text-2xl font-bold">
                A community for AI builders and founders
              </h1>
              <div className="flex justify-center">
                <TwitterTweetEmbed tweetId={'1612482298670379010'} />
                <TwitterTweetEmbed tweetId={'1624246402846191617'} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
