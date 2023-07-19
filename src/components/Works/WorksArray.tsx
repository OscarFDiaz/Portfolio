import { ArrowExternal, GithubSmall } from '../../assets/icons';
import { worksItems } from '../../helpers/json/worksItems';

export const WorksArray = () =>
  worksItems.map((work) => {
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
  });

export const WorksArrayLimited = () =>
  worksItems.slice(0, 2).map((work) => {
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
  });
