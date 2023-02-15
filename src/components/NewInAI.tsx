const newInAILinks = [
  {
    name: 'New in AI Newsletter',
    description: 'Weekly digest of the latest news from the AI space',
    icon: (
      <img
        src="/substack_logo.png"
        alt="logo"
        className="rounded-md pr-4"
        style={{ width: 70 }}
      />
    ),
    link: 'https://newinai.substack.com/',
  },
  {
    name: 'New In AI Twitter',
    description: 'Twitter bot tracking the latest news from the AI industry',
    icon: (
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
    ),
    link: 'https://twitter.com/whatsnewinai',
  },
];

const NewInAI = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          {`What's new in AI?`}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          Staying up to date with the latest news and events in the AI industry
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {newInAILinks.map((link) => (
            <a
              key={link.name}
              className="bg-white bg-opacity-10 rounded-md p-8 hover:bg-opacity-20"
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              <div>{link.icon}</div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">{link.name}</h3>
                <p className="mt-2 text-base text-indigo-200">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewInAI;
