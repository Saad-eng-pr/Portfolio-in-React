const certifications = [
  {
    id: 1,
    name: "DELF B2",
    score: "92/100",
    description: "Diplôme d'études en langue française — niveau B2",
    initials: "FR",
  },
  {
    id: 2,
    name: "TOEIC",
    score: "990/990",
    description: "Test of English for International Communication — niveau C1",
    initials: "EN",
  },
];

const Certifications = () => {
  return (
    <section className="c-space my-20" id="certifications">
      <p className="head-text hover:text-white transition ease-in-out duration-500">
        Certifications linguistiques
      </p>

      <div className="gap-5 mt-12 max-w-4xl xl:max-w-6xl mx-auto">
        <div className="work-content">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {certifications.map(({ id, name, score, description, initials }) => (
              <div key={id} className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <span className="flex h-full items-center justify-center text-xl font-bold text-black-500">
                      {initials}
                    </span>
                  </div>

                  <div className="work-content_bar" />
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
                    <p className="text-lg font-bold text-white-800 group-hover:text-white transition ease-in-out duration-500">
                      {name}
                    </p>
                    <p className="text-xl font-semibold text-white-600 group-hover:text-white transition ease-in-out duration-500">
                      {score}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-400 group-hover:text-white transition ease-in-out duration-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
