import React from 'react';
//million-ignore
const Project = ({ title, image, description, link, lang, workInProgress }) => {
  return (
    <div className="max-w-[25rem] xs:mb-0 xss:mb-7">
      <img src={`/${image}`} alt={title} className="object-cover rounded-md" />
      <h1 className="md:text-[1.5rem] sm:text-[3.2vw] xs:text-[3.1vw] xss:text-[1.5rem] leading-8 md:mt-4 sm:mt-[0.6rem] xs:mt-[0.5rem] xss:mt-4 font-pop font-bold text-[#E4E4E4]">
        {title}
      </h1>
      <p className="bg-gradient-to-r cursor-default md:text-sm sm:text-[2vw] xs:text-[1.9vw] xss:text-[0.82rem] sm:leading-4 xs:leading-3 opacity-90 from-[#9BE15D] to-[#00E3AE] text-transparent bg-clip-text">
        {lang.map((language, index) => (
          <React.Fragment key={index}>
            {language}
            {index < lang.length - 1 && (
              <span className="text-[#496331]"> / </span>
            )}
          </React.Fragment>
        ))}
      </p>
      <p className="w-full text-[#d4d4d4] mt-2 sm:text-base xs:text-xs">
        {description}
      </p>
      <div className="flex items-center gap-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-[0.55rem] group hover:cursor-pointer"
        >
          <i className="ri-link text-base bg-gradient-to-b from-[#72EDF2] to-[#5151E5] text-transparent bg-clip-text"></i>
          <div className="inline-flex flex-col">
            <h1 className="text-sm bg-gradient-to-b translate-y-[1px] from-[#72EDF2] to-[#5151E5] text-transparent bg-clip-text">
              Live Preview
            </h1>
            <div className="group-hover:bg-gradient-to-r bg-transparent from-[#72EDF2] to-[#5151E5] h-[0.7px] w-full"></div>
          </div>
        </a>
        {workInProgress && (
          <h1 className="sm:text-[0.72rem] xs:text-[0.5rem] font-semibold mt-2 px-[0.65rem] py-[0.17rem] bg-[#ff9900d9] rounded-full text-[#000000] cursor-default">
            Work in Progress
          </h1>
        )}
      </div>
    </div>
  );
};

export default Project;
