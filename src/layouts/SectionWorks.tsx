import { ArrowExternal } from '../assets/icons/ArrowExternal';
import { GithubSmall } from '../assets/icons/GithubSmall';
import { worksItems } from '../helpers/json/worksItems';
export const SectionWorks = () => {
  return (
    <section className="works" id="works">
      <h2 className="works__h2">
        <span className="works__span">#</span>Works
      </h2>

      <h3 className="works__subtitle">
        <span className="works__spansubtitle">#</span>Front-end, developer
      </h3>
      <div className="works__container">
        {worksItems.map((work) => (
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
        ))}

        <a href="" className="works__empty">
          <h2 className="empty__title">See all</h2>
          <ArrowExternal />
        </a>
      </div>
    </section>
  );
};
