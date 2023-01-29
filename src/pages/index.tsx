import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>New In AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className="flex items-center justify-between p-4 bg-white border-b">
        <img src="/newinai.png" alt="logo" className="h-10 rounded-md" />
        <div className="text-lg font-medium">{`What's New In AI`}</div>
        <div></div>
      </nav>
      <main className="flex justify-center">
        <ul className="mt-24 w-3/4 mx-auto list-none">
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
              href="http://events.newinai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="rounded-md pr-4"
                  style={{ height: 'auto', width: 64, color: 'gray' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                AI Event List
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
              href="https://discord.gg/kApBrN8uqv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                <img
                  src="/discord_logo.png"
                  alt="logo"
                  className="rounded-md pr-4"
                  style={{ height: 'auto', width: 64 }}
                />
                Discord
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
          <li className=" border border-gray-400 rounded-lg hover:bg-gray-200 mb-4">
            <a
              href="https://app.newinai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="rounded-md pr-4"
                  style={{ height: 'auto', width: 64, color: 'gray' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>
                AI News Links List
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
      </main>
    </>
  );
}
