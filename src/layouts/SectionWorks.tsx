import { ArrowExternal } from '../assets/icons/ArrowExternal';
import { BehanceSmall } from '../assets/icons/BehanceSmall';
import { designsItems } from '../helpers/json/designsItems';
import { GithubSmall } from '../assets/icons/GithubSmall';
import { worksItems } from '../helpers/json/worksItems';
export const SectionWorks = () => {
  const widthOutput = window.screen.width;

  return (
    <section className="works" id="works">
      <h2 className="works__h2">
        <span className="works__span">#</span>Works
      </h2>

      <h3 className="works__subtitle">
        <span className="works__spansubtitle">#</span>Front-end, developer
      </h3>
      <div className="works__container">
        {/* Only show 2 items if the user joins as mobile user */}
        {widthOutput > 768
          ? worksItems.map((work) => {
              return (
                <div className="works__work">
                  <picture className="work__picture">
                    <img className="work__image" {...work.img} loading="lazy" />
                  </picture>
                  <div className="work__data">
                    <div className="work__info">
                      <h4 className="work__title">{work.name}</h4>
                      <p className="work__paragraph">{work.description}</p>
                    </div>
                    <div className="work__tags">
                      {work.tags.map((tag) => (
                        <h5 className="tag__title">
                          <span className="tag__span">#</span>
                          {tag}
                        </h5>
                      ))}
                    </div>
                    <div className="work__buttons">
                      <a
                        {...work.anchor_live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button__anchor"
                      >
                        Live <ArrowExternal />
                      </a>
                      <a
                        {...work.anchor_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button__anchor"
                      >
                        Github <GithubSmall />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : worksItems.slice(0, 2).map((work) => {
              return (
                <div className="works__work">
                  <picture className="work__picture">
                    <img className="work__image" {...work.img} loading="lazy" />
                  </picture>
                  <div className="work__data">
                    <div className="work__info">
                      <h4 className="work__title">{work.name}</h4>
                      <p className="work__paragraph">{work.description}</p>
                    </div>
                    <div className="work__tags">
                      {work.tags.map((tag) => (
                        <h5 className="tag__title">
                          <span className="tag__span">#</span>
                          {tag}
                        </h5>
                      ))}
                    </div>
                    <div className="work__buttons">
                      <a
                        {...work.anchor_live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button__anchor"
                      >
                        Live <ArrowExternal />
                      </a>
                      <a
                        {...work.anchor_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button__anchor"
                      >
                        Github <GithubSmall />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

        <a
          className="works__empty"
          href="https://github.com/OscarFDiaz"
          rel="noopener noreferrer"
          target="_blank"
          title="Link to Github"
        >
          <h2 className="empty__title">See all</h2>
          <ArrowExternal />
        </a>
      </div>

      {/* DESIGNS */}
      <h3 className="works__subtitle">
        <span className="works__spansubtitle">#</span>Designs, UI Designer
      </h3>
      <div className="works__container">
        {widthOutput > 768
          ? designsItems.map((design) => (
              <div className="works__work">
                <picture className="work__picture--design">
                  <img className="work__image--design" {...design.img} loading="lazy" />
                </picture>
                <div className="work__data">
                  <div className="work__info">
                    <h4 className="work__title">{design.name}</h4>
                  </div>
                  <div className="work__tags">
                    {design.tags.map((tag) => (
                      <h5 className="tag__title">
                        <span className="tag__span">#</span>
                        {tag}
                      </h5>
                    ))}
                  </div>
                  <div className="work__buttons">
                    <a
                      {...design.anchor_behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button__anchor"
                    >
                      View More <BehanceSmall />
                    </a>
                  </div>
                </div>
              </div>
            ))
          : designsItems.slice(0, 2).map((design) => (
              <div className="works__work">
                <picture className="work__picture--design">
                  <img className="work__image--design" {...design.img} loading="lazy" />
                </picture>
                <div className="work__data">
                  <div className="work__info">
                    <h4 className="work__title">{design.name}</h4>
                  </div>
                  <div className="work__tags">
                    {design.tags.map((tag) => (
                      <h5 className="tag__title">
                        <span className="tag__span">#</span>
                        {tag}
                      </h5>
                    ))}
                  </div>
                  <div className="work__buttons">
                    <a
                      {...design.anchor_behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button__anchor"
                    >
                      View More <BehanceSmall />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        <a
          className="works__empty"
          href="https://www.behance.net/oscarofda"
          rel="noopener noreferrer"
          target="_blank"
          title="Link to Behance"
        >
          <h2 className="empty__title">See all</h2>
          <ArrowExternal />
        </a>
      </div>
    </section>
  );
};
