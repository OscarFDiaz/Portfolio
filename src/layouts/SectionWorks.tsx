import { ArrowExternal } from '../assets/icons/ArrowExternal';
import { designsItems, worksItems } from '../helpers/json/';
import { SectionTitle, SectionSubtitle } from '../components/';
import { WorkInfo, WorkTags, WorkButton, WorkPicture } from '../components/Works/';

enum buttonType {
  Behance = 'Behance',
  More = 'View More',
  Github = 'Github',
  Live = 'Live',
}

export const SectionWorks = () => {
  const widthOutput = window.screen.width;

  return (
    <section className="works" id="works">
      <SectionTitle title="Works" />
      <SectionSubtitle title="Front-end, developer" style={{ padding: '3rem 0 2rem' }} />
      <div className="works__container">
        {/* Only show 2 items if the user joins as mobile user */}
        {widthOutput > 768
          ? worksItems.map((work) => {
              return (
                <div className="works__work">
                  <WorkPicture work={work.img} />
                  <div className="work__data">
                    <WorkInfo name={work.name} description={work.description} />
                    <WorkTags work={work} />
                    <div className="work__buttons">
                      <WorkButton work={work.anchor_live} button={buttonType.Live} />
                      <WorkButton work={work.anchor_github} button={buttonType.Github} />
                    </div>
                  </div>
                </div>
              );
            })
          : worksItems.slice(0, 2).map((work) => {
              return (
                <div className="works__work">
                  <WorkPicture work={work.img} />
                  <div className="work__data">
                    <WorkInfo name={work.name} description={work.description} />
                    <WorkTags work={work} />
                    <div className="work__buttons">
                      <WorkButton work={work.anchor_live} button={buttonType.Live} />
                      <WorkButton work={work.anchor_github} button={buttonType.Github} />
                    </div>
                  </div>
                </div>
              );
            })}

        {/* SEE ALL button */}
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
      <SectionSubtitle title="Designs, UI Designer" style={{ padding: '3rem 0 2rem' }} />
      <div className="works__container">
        {widthOutput > 768
          ? designsItems.map((design) => (
              <div className="works__work">
                <WorkPicture
                  work={design.img}
                  className="work__picture--design"
                  imgClass="work__image--design"
                />
                <div className="work__data">
                  <WorkInfo name={design.name} />
                  <WorkTags work={design} />
                  <div className="work__buttons">
                    <WorkButton work={design.anchor_behance} button={buttonType.More} />
                  </div>
                </div>
              </div>
            ))
          : designsItems.slice(0, 2).map((design) => (
              <div className="works__work">
                <WorkPicture
                  work={design.img}
                  className="work__picture--design"
                  imgClass="work__image--design"
                />
                <div className="work__data">
                  <WorkInfo name={design.name} />
                  <WorkTags work={design} />
                  <div className="work__buttons">
                    <WorkButton work={design.anchor_behance} button={buttonType.More} />
                  </div>
                </div>
              </div>
            ))}

        {/* SEE ALL button */}
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
